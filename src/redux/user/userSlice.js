import {createSlice} from '@reduxjs/toolkit';
import {
  userSignUp,
  userLogin,
  userLogOut,
} from './userAction'


const initialState = {
  loading : false,
  userInfo : null,
  userToken : localStorage.getItem("access-Token")
    ? localStorage.getItem("access-token")
    : null,
  refreshToken : localStorage.getItem("refresh-token")
    ? localStorage.getItem("refresh-token")
    :null,
  error:null,
  success : false,
  loginSuccess : false,
  logoutInfo: {},
  signUpSuccess : false,
};

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {},
  extraReducers: {
    //유저 회원가입
    [userSignUp.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = true;
    },
    [userSignUp.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.signUpSuccess = payload.success; 
    },
    [userSignUp.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },

    //유저 로그인
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload.data;
      localStorage.setItem('user-info' , JSON.stringify(payload.data));
      state.userToken = payload.headers.authorization;
      state.loginSuccess = true;
    },
    [userLogin.rejected]: (state,{payload}) => {
      state.loading = false;
      state.error = payload;
      state.loginSuccess =false;
    },
    
    //유저 로그아웃
    [userLogOut.pending]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [userLogOut.fulfilled]: (state) => {
      localStorage.removeItem('user-info');
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      state.loading = false;
      state.userInfo = null;
      state.error = null;
      state.loginSuccess = false;
    },
    [userLogOut.rejected] : (state, {payload}) => {
      state.loading = false;
      state.error =payload;
    },

  }
})

export const {} = userSlice.actions;

export default userSlice.reducer;