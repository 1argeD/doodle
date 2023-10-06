import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const uri = "localhost:8081";

export const postPen = createAsyncThunk(
    '/postPen',
    async (payload, thunkApi) => {
      try {
        const response = await axios.get(`https://localhost:8081`, {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        });
        return thunkApi.fulfillWithValue(response.body);
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);      }
    }
  );

  export const getPen = createAsyncThunk(
    '/getPen',
    async (payload, thunkApi) => {
        try{
            console.log("getPen 함수가 실행중임");
            console.log("페이로드 값 확인해보기", payload)
            const response = await axios.get(`http://localhost:8081/canvas/pen/${payload}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem('access-token'),
                    RefreshToken : localStorage.getItem("refresh-token"),
                },
            }) 
            console.log("일단 여기까지 왔음 리스폰스 값 확인해보기 : ",response.data);
            return response.data;
        } catch(error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
  )

  export const updatePen = createAsyncThunk(
    `/updatePen`,
    async(payload, thunkApi) => {
        try{
            const response = await axios.put(`http://localhost:8081`,
            {
                headers: {
                    Authorization: localStorage.getItem('access-token')
                }
            })
            return null;
        } catch(error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
  )

  export const deletePen = createAsyncThunk(
    `/deletePen`,
    async(payload, thunkApi) => {
        try{
            const response = await axios.delete(`http:localhost:8081`,
                {
                    headers: {
                        Authorization: localStorage.getItem('access-token'),
                    }
                }
            )
            return null;
        } catch(error) {
            return thunkApi.rejectWithValue(error.response.data);
        }}  
  )

