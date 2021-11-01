import { ITEMS_LOADING, GET_COUNTRY } from "../actions/types";

const initialState = {
  Country: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        Country: action.payload,
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
