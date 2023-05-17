import React,{ useEffect } from "react";
import userLogin from "../redux/user/userSlice"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react";
import styled from "styled-components";
import LoginButton from "../components/element/button/LoginButton";
import LoginBox from "../components/LoginBox"
import { useSelector } from "react-redux";

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const success = useSelector((state) => state.user.userToken)

   const {
    watch,
    register,
    handleSumit,
    formState: { errors },
   } = userForm({mode:"onChange"});

   const onSubmit = (payload, thunkAPI) => {

    dispatch(userLogin(payload));
   };
   
   const goToRegister = () => {
    navigate("/Reister");
   }
};

const LoginButton = styled(LoginButton)`
    transition: "all 0.3s"
    `
