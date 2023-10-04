import { createSlice } from "@reduxjs/toolkit";
import { 
    postCanvas,
    getCanvas,
    getCanvasList,
    putCanvas,
} from "./canvasAction";


const initialState = {
    title : null,
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
    extraReducers : (builder) => {
        builder
        //캔버스 생성
        .addCase(postCanvas.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(postCanvas.fulfilled, (state, action)=> {
            state.isloading = false,
            state.canvas = [...state.canvas, action.payload];
        })
        .addCase(postCanvas.rejected, (state, action)=> {
            state.isloading = false,
            state.error = action.payload;
        }) 
       
        //캔버스 목록 가져오기
        .addCase(getCanvasList.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(getCanvasList.fulfilled, (state, action)=> {
            state.isloading = false,
            state.list = state.list.concat(action.data);
        })
        .addCase(getCanvasList.rejected, (state, action)=> {
            state.isloading = true,
            state.error = action.payload;
        })
        //캔버스 단일 조회
        .addCase(getCanvas.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(getCanvas.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = action.payload;
        })
        .addCase(getCanvas.rejected, (state)=> {
            state.isloading = false;
        })
        //캔버스 수정하기
        .addCase(putCanvas.pending, (state)=> {
            state.isloading = true;
        })
        .addCase(putCanvas.fulfilled, (state, action)=> {
            state.isloading = false;
            state.canvas = state.canvas.map((canvas) =>
                canvas.canvasId === action.payload.canvasId
                ? {
                    ...canvas,
                    title: action.title,
                }
                : canvas
            )
        })
        .addCase(putCanvas.rejected, (state, action)=> {
            state.isloading = false;
            state.error = action.payload;
        })
    }
})

export const{} = canvasSlice.actions
export default canvasSlice.reducer