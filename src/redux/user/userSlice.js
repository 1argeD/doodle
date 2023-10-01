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
  extraReducers: (builder) =>{
    builder
    //유저 회원가입
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.signUpSuccess = true;
      })
      .addCase(userSignUp.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.signUpSuccess = payload.signUpSuccess; 
      }) 
      .addCase(userSignUp.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.success = false; 
      }) 

    //유저 로그인
    .addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(userLogin.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload.data;
      localStorage.setItem('user-info' , JSON.stringify(payload.data));
      state.userToken = payload.headers.authorization;
      state.success = payload.data.success;
      state.loginSuccess = true;
    })
    .addCase(userLogin.rejected, (state,{payload}) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      state.loginSuccess =false;
    })
    
    //유저 로그아웃
    .addCase(userLogOut.pending, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(userLogOut.fulfilled, (state,{payload}) => {
      localStorage.removeItem('user-info');
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      state.loading = false;
      state.logoutInfo = payload;
      state.userToken = null;
      state.error = null;
    })
    .addCase(userLogOut.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    })
  }
})


export const {} = userSlice.actions;


export default userSlice.reducer;