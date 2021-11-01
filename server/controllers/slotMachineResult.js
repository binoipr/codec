const { json } = require("express");
const express = require("express");

const result = async (req, res) => {
  const { fruit1, fruit2, fruit3 } = req.query;

  var awardCoin = 0;
  try {
    if (fruit1 === "🍒" && fruit2 === "🍒" && fruit3 === "🍒") {
      awardCoin = 50 + awardCoin;
    } else if (fruit1 === "🍎" && fruit2 === "🍎" && fruit3 === "🍎") {
      awardCoin = 20 + awardCoin;
    } else if (fruit1 === "🍌" && fruit2 === "🍌" && fruit3 === "🍌") {
      awardCoin = 15 + awardCoin;
    } else if (fruit1 === "🍋" && fruit2 === "🍋" && fruit3 === "🍋") {
      awardCoin = 3 + awardCoin;
    } else if (
      (fruit1 === "🍒" && fruit2 === "🍒") ||
      (fruit2 === "🍒" && fruit3 === "🍒")
    ) {
      awardCoin = 40 + awardCoin;
    } else if (
      (fruit1 === "🍎" && fruit2 === "🍎") ||
      (fruit2 === "🍎" && fruit3 === "🍎")
    ) {
      awardCoin = 10 + awardCoin;
    } else if (
      (fruit1 === "🍌" && fruit2 === "🍌") ||
      (fruit2 === "🍌" && fruit3 === "🍌")
    ) {
      awardCoin = 5 + awardCoin;
    }
    return res.status(200).json({
      message: "Successfully rolled",
      awardCoin: awardCoin,
      loading: false,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong!", loading: false });
  }
};

module.exports = { result };
