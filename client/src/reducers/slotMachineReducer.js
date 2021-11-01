import { ROLLING_PRICE, BALANCE } from "../actions/types";

const initialState = {
  loading: false,
  coins: 20,
  balance: 0,
  error: "",
  status: false,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLLING_PRICE:
      return {
        ...state,
        loading: true,
        status: false,
        coins: state.coins - 1,
      };
    case BALANCE:
      return {
        ...state,
        loading: true,
        status: action.payload > 0 ? true : false,
        coins: state.coins + action.payload,
      };

    default:
      return state;
  }
};

export default coinReducer;
