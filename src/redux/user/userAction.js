import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { apis } from "../../../shared/axios";
import { get } from "react-hook-form";

const URL = {
    BASE: Process.env.REACT_APP_BASE_URL,
};

export const userLogin = createAsyncThunk(
    "user/login",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.get(
                ''
            );
            const ACCESS_TOKEN = response.headers.authorization;
            localStorage.setItem("access-token", ACCESS_TOKEN);
            localStorage.setItem("refresh-token", response.headers.refreshtoken);
            return fulfillWithValue(response);
        } catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userLogout = createAsyncThunk(
    "user/logout",
    async (arg, { getState, rejectWithValue, fulfillWithValue })=> {
        const { user } = getState();
        try {
            const response = await apis.logout();
            return fulfillWithValue(response.data);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

