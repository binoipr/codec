import { GET_COUNTRIES, GET_COUNTRY, ITEMS_LOADING } from "./types";

import axios from "axios";

export const fetchCountries = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("https://restcountries.com/v2/all")
    .then((res) => dispatch({ type: GET_COUNTRIES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const fetchCountry = (search) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get(`https://restcountries.com/v2/name/${search}?fullText=true`)
    .then((res) => dispatch({ type: GET_COUNTRY, payload: res.data }))
    .catch(
      (err) => (
        alert("Please enter correct name."), (window.location.href = "/home")
      )
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
