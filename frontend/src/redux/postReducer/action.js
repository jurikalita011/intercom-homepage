import axios from "axios";
import {
  GET_HELP_SUCCESS,
  GET_NEWS_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_REQUEST,
} from "../actionTypes";

// get data news===>

export const getNews = () => (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  axios
    .get("https://intercom-homepage-api.onrender.com/posts")
    .then((res) => {
      dispatch({ type: GET_NEWS_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: GET_POST_FAILURE });
    });
};

//get data help====>
export const getHelp = () => (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  axios
    .get("https://intercom-homepage-api.onrender.com/helps")
    .then((res) => {
      dispatch({ type: GET_HELP_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: GET_POST_FAILURE });
    });
};
