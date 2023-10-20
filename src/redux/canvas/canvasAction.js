import axios from "axios";
import { apis } from "../../shared/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const  url = "http://192.168.35.29:8081";

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
                url+"/canvas/all",
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
                url+`canvas/one/${payload.canvasId}`,
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

export const deleteCanvas = createAsyncThunk(
    `/delete/Canvas`,
    async(payload, {rejectWithValue}) => {
        try{
            const response = await axios.delete(
                url+`/canvas/delete/${payload}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization : localStorage.getItem("access-token"),
                        RefreshToken : localStorage.getItem("refresh-token"),
                    },
                }
            )
            return response.data;
        } catch(error) {
            return rejectWithValue(error.data);
        }
    }
)

export const inviteUser = createAsyncThunk(
    `/findId/{canvasId}`,
    async(payload,{rejectWithValue}) => {
        try{
            const canvasId = JSON.parse(payload?.canvasId)
            const nickname = JSON.parse(payload?.nickname)
            console.log("payload값 찍어보기 : ",nickname);
            console.log("닉네임과 펄스 데이터 확인해 보기",canvasId.canvas,nickname)
            const response = await axios.post(
                url+`/findId/${canvasId.canvas}`,
                nickname,
                {
                    headers : {
                        "Content-Type": "application/json",
                        Authorization : localStorage.getItem("access-token"),
                        RefreshToken : localStorage.getItem("refresh-token"),
                    }
                }
            )
            console.log("response 데이터 값 확인해 보기 : ", response);
            return null;
        } catch(error) {
            return rejectWithValue(error.data);
        }
    }
)
