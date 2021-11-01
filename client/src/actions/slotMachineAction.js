import { ROLLING_PRICE, BALANCE } from "./types";

export const rollingPrice = () => {
  return {
    type: ROLLING_PRICE,
  };
};
export const balance = (coins) => {
  return {
    type: BALANCE,
    payload: coins,
  };
};
