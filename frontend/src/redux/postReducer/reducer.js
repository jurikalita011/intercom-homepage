import {
  GET_HELP_SUCCESS,
  GET_NEWS_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_REQUEST,
} from "../actionTypes";

const initialState = {
  news: [],
  help: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        news: payload,
      };
    case GET_HELP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        help: payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
