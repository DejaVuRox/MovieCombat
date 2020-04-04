import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import resultReducer from './resultReducer'

export default combineReducers({
  search: searchReducer,
  result: resultReducer
});
