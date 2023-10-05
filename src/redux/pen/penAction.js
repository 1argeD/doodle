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
            console.log("페이로드 정보 확인",payload);
            const response = await axios.post(`http://localhost:8081/testSub/${payload.canvsId}`,
            {
                headers: {
                    Authorization: localStorage.getItem('access-token')
                },
            }) 
            console.log("실행되면 이게 보임")
            return thunkApi.fulfillWithValue(response.data);
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

  export const websoketTest =  createAsyncThunk(
    '/test',
    async(payload,thunkApi) => {
        try {
            const response = await axios.get(
                "http:localhost:8081/testSub/"+`${payload.canvsId}`,
            {
                headers:{
                    Authorization: localStorage.getItem('access-token')
                }
            })
            return thunkApi.fulfillWithValue(response)
        } catch(error) {
            console.log(error.response.data);
        }
    }
  )
