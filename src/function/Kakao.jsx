import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import KakaoButton from "../components/element/button/LoginButton";
import Login from "../pages/login";

const Kakao = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.user);
    

    const herf = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    useEffect(() => {
        dispatch(Login(code));
        navigate("/")
    }, []);

    return <KakaoButton />;
};

export default Kakao;