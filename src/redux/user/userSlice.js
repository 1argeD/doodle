import {createSlice} from '@reduxjs/toolkit';
import {
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
  registerSuccess : false,
};

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload.data;
      localStorage.setItem('user-info' ,JSON.stringify(payload.data));
      state.userToken = payload.headers.authorization;
      state.success = true;
    }

  }
})

export const {user} = userSlice.actions;

export default userSlice.reducer;