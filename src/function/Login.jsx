import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react";
import styled from "styled-components";
import LoginButton from "../components/element/button/LoginButton";
import LoginBox from "../components/LoginBox"

const Login = (props) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
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
