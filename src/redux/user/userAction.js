import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/axios";


const URL = "http://192.168.35.29:8081"


export const userSignUp = createAsyncThunk(
    'user/sign-up',
    async(payload, {rejectWithValue}) => {
        try{
            const config = {
                headers : {
                    'Content-Type': 'application/json',
                }
            };
            const signUpResponse = await axios.post(
                URL+"/member/sign-up",
                payload,
                config,
            )
            return signUpResponse;
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
                URL+`/member/login`,
                payload,
                config
            );
            localStorage.setItem('access-token', response.headers.authorization);
            localStorage.setItem('refresh-token', response.headers.refreshtoken);
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

export const userLogOut = createAsyncThunk(
    'user/logout', 
        async (payload, {getState, rejectWithValue , fulfillWithValue}) => {
            const {user} = getState();
        try{
            const config = {
                headers : {
                    'Authorization' : localStorage.getItem('access-token'),
                    'Refresh-Token' : localStorage.getItem('refresh-token'),
                    'Content-type' : 'application/json',
                },
            };
            const response = await  axios.post(
                URL+`/member/logout`,
                payload,
                config
            );
            return fulfillWithValue(response.data);
        } catch(error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    } 

) 
    
