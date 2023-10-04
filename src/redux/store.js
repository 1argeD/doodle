import { combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "./user/userSlice"
import canvas from "./canvas/canvasSlice"
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    user,
    canvas,
});
const store = configureStore({
    reducer : rootReducer,
    middlewares : [thunk],
});

export default store;