/**
 * unir todos os reducers
 * */
import { combineReducers } from "redux";

import auth from "./auth/reducer";

export default combineReducers({ auth });
