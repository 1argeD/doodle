import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {user} from "./user/userSlice"
import { configureStore } from "@reduxjs/toolkit";

const middlewares = [thunk];
const rootReducer = combineReducers({
    user,
});
const store = configureStore({
    reducer : rootReducer,
    middlewares : [thunk],
});

export default store;