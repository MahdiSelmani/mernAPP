import { combineReducers } from "redux";
import carReducer from "./carReducers";

const rootReducer = combineReducers({ carReducer });

export default rootReducer;