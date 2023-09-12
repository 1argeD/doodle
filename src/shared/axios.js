import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { processResult } from "immer/dist/internal";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URI,
})

axiosInstance.defaults.headers.common["Authorization"] = 
    localStorage.getItem("accessToken");

axiosInstance.interceptors.response.use(
    function (res) {
        return res;
    },
    async function (error) {
     try {
        const originalRequest = error.config;
        localStorage.setItem("accessToken", requestRes.authorization);
        localStorage.setItem("refreshToken", requestRes["refreshToken"]);
        return await axiosInstance.request(originalRequest); 
     }  catch (error) {
        localStorage.removeItem("accessToken");
        return console.log(error);
     }
    }
);
