import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../../actions/authAction";

import "./LoginStyle.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(true);

  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
      if (msg !== null) {
        alert(msg);
        window.location.reload();
      }
    } else if (error.id === "SIGNUP_FAIL") {
      setMsg(error.msg.msg);
      if (msg !== null) {
        alert(msg);
        window.location.reload();
      }
    } else {
      setMsg(null);
    }
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      /* sign up */
      const { name, email, password, confirmpassword } = form;
      if (password === confirmpassword) {
        const newUser = {
          name,
          email,
          password,
        };
        dispatch(signup(newUser));
        fieldClear();
      } else {
        alert("Password mismatch!");
      }
    } else {
      /* login  */
      const { email, password } = form;
      const newUser = {
        email,
        password,
      };
      dispatch(login(newUser));
      setUser(false);
    }
  };

  const fieldClear = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  /*for switching btwn signup/signin */
  const switchMode = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup
                ? "Already have an account: "
                : "Don't have an account: "}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src="/Images/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
