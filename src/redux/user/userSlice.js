import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Buffer } from "buffer"
import Login from "../../pages/login";
import { axiosInstance } from "../../shared/axios"

const URI = {
  BASE: process.env.REACT_APP_BASE_URI,
};

const LOGIN = "member/login"

export function UserLogin(user) {
  console.log("Userlogin");
  return { type:Login, user };
}

const initialState = {
  isLogin: localStorage.getItem("AccessToken") ? true : false,
}

export const __userRegister = createAsyncThunk(
  "/member/signup",
  async(payload, thunkAPI) => {
    try {
      const response = await axios.post(`${URI.BASE}/member/siginup`, {
        email: payload.email,
        nickname: payload.nickname,
        password: payload.password,
        passwordConfigure: payload.passwordConfigure,
      });

      if(response.state == 200) {
        alert('가입되었습니다.');
      } else if('승인할 수 없는 계정입니다. 다시 입력하세요');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.state);
    }
  }
);

export const __userLogin = createAsyncThunk(
  "member/login",
  async (payload, thunkAPI) => {
    try {
      const { email, password } = payload;
      const response = await axios.post(`${URI.BASE}/member/login`, {
        email, 
        password,
      });
      
      const accessToken = response.headers.authorization;
      const refreshtoken = response.headers[`refresh-token`];
      const encodeBody = accessToken.spilt(".")[1];
      const decodeBody = new Buffer.from(encodeBody, "base64").toString("uft8");
      const jsonBody = JSON.parse(decodeBody);
      localStorage.setItem("userId", jsonBody.jti);
      localStorage.setItem("userNickname", jsonBody.sub);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshtoken", refreshtoken);
      return thunkAPI.fulfillWithValue(jsonBody.sub);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    asyncUserName: (state, action) => {
      state.userNickname = localStorage.getItem("userNickname"); 
    },
    userLogout: (state, action) => {
      const userToken = localStorage.getItem("accessToken");
      axios.delete(`${URI.BASE}/member/logout`, {
        headers: {
          Authorization: userToken,
        },
      });
    },
  },
  extraReducers: {
    [__userLogin.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.userNickname = action.payload;
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { asyncUserName, userLogout } = userSlice.actions;
export default userSlice.reducer;
