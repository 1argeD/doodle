import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const websoketTest =  createAsyncThunk(
    'get/test',
    async(payload,thunkApi) => {
        try {
            console.log("payload값 확인해보기 : ",payload)
            const response = await axios.get(
                `http://localhost:8081/testSub/${payload}`,
            {
                headers:{
                    Authorization: localStorage.getItem('access-token')
                }
            })
            return thunkApi.fulfillWithValue(response)
        } catch(error) {
            console.log("실행이 안 됨");
        }
    }
  )