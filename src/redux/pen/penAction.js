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
            const response = await axios.get(`http://localhost:8081/canvas/pen/${payload}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem('access-token'),
                    RefreshToken : localStorage.getItem("refresh-token"),
                },
            }) 
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

