const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const User = require("../models/userModel");

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "Email already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            "process.env.SECRET_KEY",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
                user: { id: user.id, name: user.name, email: user.email },
              });
            }
          );
        });
      });
    });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    //Validate user
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        "process.env.jwtSecretkey",
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: { id: user.id, name: user.name, email: user.email },
          });
        }
      );
    });
  });
};

const getUser = async (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};

module.exports = { signup, login, getUser };
