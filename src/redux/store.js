import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./user/userSlice";


const middleware = [thunk];

const rootReducer = combineReducers({
    userSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;