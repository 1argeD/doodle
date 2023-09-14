import {createSlice} from '@reduxjs/toolkit';
import {
  userSignUp,
  userLogin,
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
    },
    [userSignUp.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.signUpSuccess = payload.success; 
    },
    [userSignUp.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
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
    
  }
})

export const {} = userSlice.actions;

export default userSlice.reducer;