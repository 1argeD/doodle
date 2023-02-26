import { createSlice } from "@reduxjs/toolkit";
import {
    userLogin,
    userLogout,
} from "../user/userAction";

const initialState = {
    loading: false,
    userInfo: null,
    userToken: localStorage.getItem("access-token")
        ? localStorage.getItem("access-token")
        : null,
    refreshtoken: localStorage.getItem("refresh-token")
        ? localStorage.getItem("refresh-token")
        : null,
    error:null,
    success: false,
    idMsg: null,
    idErrorMsg: null,
    idSuccess: true,
    idErrorMsg: null, 
    duplicateNickSuccess: true,
    loginSuccess: false,
    kakaoToken: localStorage.getItem('kakao-token')
      ? localStorage.getItem('kakao-token')
      : null,
    logoutInfo: {},
    registerSuccess: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {},
    extraReducers: {
      [userLogin.pending] : (state) => {
        state.loading = true;
        state.error = null;
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.data;
        localStorage.setItem("user-info", JSON.stringify(payload.data));
        state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
    },
    // 유저 회원가입
    [registerUser.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [regsterUser.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
    //유저 로그아웃
    [userLogout.fulfilled]: (state, { payload }) => {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh")
        localStorage.removeItem("user-info");
        state.loading = false;
        state.logoutInfo = payload;
        state.userToken = null;
        state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
    }
})

export const {} = userSlice.actions;

export default userSlice.reducer;
