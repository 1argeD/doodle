import { createSlice } from "@reduxjs/toolkit";
import { 
    postCanvas,
    getCanvas,
    getCanvasList,
    putCanvas,
} from "./canvasAction";
import axios from "axios";

const initialState = {
    title : [],
    list:[],
    isloading : false,
    error : null,
    userToken : localStorage.getItem("access-token")
        ? localStorage.getItem("access-token")
        :null,
    refreshToken : localStorage.getItem("refresh-token")
        ? localStorage.getItem("refresh-token")
        :null,
}

export const canvasSlice = createSlice({
    name : "canvas",
    initialState,
    reducers: {},
    extraReducers : {
        //캔버스 생성
        [postCanvas.pending]: (state) => {
            state.isloading = true;
        },
        [postCanvas.fulfilled]: (state, action) => {
            state.isloading = false,
            state.canvas = [...state.canvas, action.payload];
        },
        [postCanvas.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },
        //캔버스 목록 가져오기
        [getCanvas.pending]: (state) => {
            state.isloading = true;
        },
        [getCanvas.fulfilled]: (state, action) => {
            state.isloading = false;
            state.canvas = action.payload;
        },
        [getCanvas.rejected]: (state) => {
            state.isloading = true;
        },
        //캔버스 단일 조회
        [getCanvasList.pending]: (state) => {
            state.isloading = true;
        },
        [getCanvasList.fulfilled]: (state, action) => {
            state.isloading = false;
            state.list = state.list.concat(action.payload);
        },
        [getCanvasList.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },
        //캔버스 수정하기
        [putCanvas.pending]: (state) => {
            state.isloading = true;
        },
        [putCanvas.fulfilled]: (state, action) => {
            state.isloading = false;
            state.canvas = state.canvas.map((canvas) =>
                canvas.canvasId === action.payload.canvasId
                ? {
                    ...canvas,
                    title: action.title,
                }
                : canvas
            )
        },
        [putCanvas.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        },
    }
})