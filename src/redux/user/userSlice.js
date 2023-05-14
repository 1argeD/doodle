import { createSlice } from "@reduxjs/toolkit";
import {
    userLogin,
    userLogout,
} from "../user/userAction";
import Swal from "sweetalert2"
import axios from "axios";
import { Action } from "@remix-run/router";

export const userRegister = createAsyncThunk(
    "member/signup",
    async ({email, nickname, password, passwordConfirm,test}) => {
        try{
            const response = await axios.post(`/member/signup`, {
                email : email,
                nickname : nickname,
                password : password,
                passwordConfirm : passwordConfirm,
            });
            Swal.fire({title : "회원가입에 성공했습니다", confirmButtonColor:"#FFD68B"})
        } catch (error) {
            Swal.fire({title : " 빈 칸 없이 작성해주세요.", confirmButtonColor:"#FFD68B"})
        }
    }
)  

export const userLogin = createAsyncThunk(
    "member/login",
    async (payload, thunkAPI) => {
        try {
            const{ email, password } = payload;
            const datas = {email:email, password:password}
            const {data, headers} = await axios.post('member/login', data)

            let token = headers.getAuthorization
            let nickname = data.data.nickname

            localStorage.setItem("nickname", nickname)
            localStorage.setItem("accessToken", token)
            localStorage.setItem("test", test)
            
            window.localStorage.href = "/main"
            return thunkAPI.fulfillwithValue(payload);
        } catch(error) {
            if(error.response.data.errormessage === "로그인에 실패하였습니다.") {
                Swal.fire({title:"로그인에 실패했습니다.", confirmButtonColor:"#FFD68B"})
            }
            if(error.response.data.errormessage === "사용자가 존재하지 않습니다") {
                Swal.fire({title:"사용자가 존재하지 않습니다.", confirmButtonColor:"#FFD68B"})
            }
            if(error.message === "Request failed with state code 500") {
                Swal.fire({title: "회원정보가 없습니다. 회원가입 후 다시 시도해 주세요.", confirmButtonColor:"#FFD68B"})
            }
            if(error.response.data.errormessage === "삭제된 회원입니다.") {
                Swal.fire({title:"삭제된 회원입니다.", confirmButtonColor:"#FFD68B"})
            }
        }
    }
); 


    const userSlice = createSlice({
        name : "userSlice",
        initialState : {},
        reducers: {
            asyncUserName : (state, action) => {
                state.nickname = localStorage.getItem("nickname");
            },
            userLogout: (state, action) => {
                const userToken = localStorage.setItem("aceessToken");
                axios.delete(`/member/login`, {
                    headers: {
                        Authorization: userToken,
                    },
                });
            } ,
        },
        extraReducers: {
            [userLogin.fulfilled]: (state, action) => {
                state.isLoading = true;
                state.userName = action.payload;
            },
            [userLogin.rejected] : (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        },
    });

export const { asyncUserName, userLogout } = userSlice.action;
export default userSlice.reducer;
