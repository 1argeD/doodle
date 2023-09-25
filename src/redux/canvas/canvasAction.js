import axios from "axios";
import { apis } from "../../shared/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const  url = "http://localhost:8081";




export const postCanvas = createAsyncThunk(
    'post/canvas',
    async(payload, {rejectWithValue}) => {
        try{
            const response = await axios.post(
                url+"/canvas",
                {canvasTitle : payload.canvasTitle},
                {
                    headers: {
                        "Content-Type" : "application/json",
                        Authorization: localStorage.getItem("access-token"),
                        RefreshToken: localStorage.getItem("refresh-token"),
                    }
                }
               
            )
            return response.payload;
        } catch(error) {
                return rejectWithValue(error);
        }
    }

)
//canvas 목록 가져오기
export const getCanvasList = createAsyncThunk(
    '/get/canvasData',
    async(thunkApi,{fulfillWithValue}) => {
        try{
            const response = await axios.get(
                url+"/canvas/get",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization : localStorage.getItem("access-token"),
                        RefreshToken : localStorage.getItem("refresh-token"),
                    },
                }
            );
            return response.data;
        }catch(error){  
            return thunkApi.rejectWithValue(error);
        }
    }
)
//canvas 단일 조회
export const getCanvas = createAsyncThunk(
    'get/canvasListData',
    async(payload,thunkApi) => {
        try{
            const {data} = await axios.get(
                url+`canvas/get/${payload.canvasId}`,
            );
            if(!data) {
                return;
            } 
            return thunkApi.fulfillWithValue(data);
        } catch(error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const putCanvas = createAsyncThunk(
    '/put/Canvas',
    async(payload, {rejectWithValue}) => {
        try {
            const response = await axios.put(
                url+"/canvas/update",
                {canvasTitle : payload.canvasTitle},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization : localStorage.getItem("access-token"),
                        RefreshToken : localStorage.getItem("refresh-token"),
                    },
                }
            );
            return response.date;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)
