import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/axios";

const URL = {
    baseURL: "localhost:8081"
};

export const userLogin = createAsyncThunk(
    'user/login',
    async (payload, {getState, rejectWithValue}) => {
        const { user } = getState();
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json',
                },
            };
            const response = await axios.post(
                "http://localhost:8081/member/login",
                payload,
                config
            );
            localStorage.setItem('access-token', response.headers.authorization);
            localStorage.setItem('access-token', response.headers.refreshtoken);
            console.log(payload);
            console.log("-------------------------------------------------");
            return response;
        }catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        } 
    }
    
)