import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from "./user/userSlice"

const middleware = [thunk];

const rootReducer = combineReducers({
    user,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;