import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/axios";

const URL = {
    baseURL: "localhost:8081"
};

export const userSignUp = createAsyncThunk(
    'user/signUp',
    async(payload, {rejectWithValue}) => {
        try{
            const config = {
                headers : {
                    'Content-Type': 'application/json',
                }
            };
            const response = await axios.post(
                "http://localhost:8081/member/signUp",
                payload,
                config,
            )
        } catch(error) {
            if(error.response&&error.response.data.message) {
                return rejectWithValue(error.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const userLogin = createAsyncThunk(
    'user/login',
    async (payload, {rejectWithValue}) => {

        try {
            const config = {
                headers : {
                    'Content-type' : 'application/json',
                },
            };
            const response = await axios.post(
                "http://localhost:8081/member/login",
                payload,
                config
            );
            localStorage.setItem('access-token', response.headers.authorization);
            localStorage.setItem('access-token', response.headers.refreshtoken);
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
