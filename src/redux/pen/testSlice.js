import { createSlice } from "@reduxjs/toolkit";
import {
    websoketTest,
    } from "../pen/testAction";

const initialState = {
    name:`test`,
    isLoading: false,
    canvasId: null,
    test : null,
    err: null,
  };

const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder
      .addCase(websoketTest.pending,(state, action)=> {
        state.isLoading = true;
      })
      .addCase(websoketTest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.canvasId = action.canvasId;
        state.test = action.payload;
      })
      .addCase(websoketTest.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      })
    }
  });

export const {test} = testSlice.actions;
export default testSlice.reducer;