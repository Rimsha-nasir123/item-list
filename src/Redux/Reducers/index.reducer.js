import { addDelItem } from "./addDelItem.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addDelItem,
});
export default rootReducer;
