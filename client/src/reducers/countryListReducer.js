import { GET_COUNTRIES, ITEMS_LOADING } from "../actions/types";

const initialState = {
  Countries: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        Countries: action.payload,
        loading: false,
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
