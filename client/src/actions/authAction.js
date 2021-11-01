import axios from "axios";
import { returnErrors } from "./errorAction";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

/*----------Loading user ------------*/
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get("/auth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response));
      dispatch({ type: AUTH_ERROR });
    });
};

/* -------------Sign up -------------*/
export const signup = ({ name, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  axios
    .post("/auth/signup", body, config)
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      window.location.reload();
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "SIGNUP_FAIL")
      );
      dispatch({
        type: SIGNUP_FAIL,
      });
    });
};

/* ----------- Login------------ */
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  axios
    .post("/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      window.location.reload();
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

/* ----------Logout------------  */
export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

/* ------- Setup config/headers and token--------- */
export const tokenConfig = (getState) => {
  const token = localStorage.getItem("jwtToken");
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
