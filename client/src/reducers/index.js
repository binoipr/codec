import { combineReducers } from "redux";

import countryListReducer from "./countryListReducer";
import countryReducer from "./countryReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import coinReducer from "./slotMachineReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  countries: countryListReducer,
  country: countryReducer,
  slotMachine: coinReducer,
});
