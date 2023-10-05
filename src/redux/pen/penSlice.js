import { createSlice } from "@reduxjs/toolkit";
import {
postPen,
getPen,
updatePen,
deletePen,
} from "../pen/penAction";

const initialState = {
    isloading : false,
    error : null,
    userToken : localStorage.getItem("access-toekn")
        ? localStorage.getItem("access-token")
        : null,
    refreshToken : localStorage.getItem("refresh-token")
        ? localStorage.getItem("arefresh-token")
        : null
}

export const penSlice = createSlice({
    name : "pen",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
            builder
        //팬생성
        .addCase(postPen.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(postPen.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = [...state.canvas, action.payload];
        })
        .addCase(postPen.rejected, (state, action)=> {
            state.isloading = false;
            state.error = action.payload;
        }) 

        //팬읽기
        .addCase(getPen.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(getPen.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = [...state.canvas, action.payload];
        })
        .addCase(getPen.rejected, (state, action)=> {
            state.isloading = false;
            state.error = action.payload;
        }) 

        //팬수정
        .addCase(updatePen.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(updatePen.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = [...state.canvas, action.payload];
        })
        .addCase(updatePen.rejected, (state, action)=> {
            state.isloading = false;
            state.error = action.payload;
        }) 

        //팬삭제
        .addCase(deletePen.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(deletePen.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = [...state.canvas, action.payload];
        })
        .addCase(deletePen.rejected, (state, action)=> {
            state.isloading = false;
            state.error = action.payload;
        })     
    }
    
})

export const {pen} = penSlice.actions;
export default penSlice.reducer;