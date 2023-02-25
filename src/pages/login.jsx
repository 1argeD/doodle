import React from "react";
import Background from "../components/Background";
import Header from '../components/GlobalHeader';
import LoginBox from "../components/LoginBox";
import KakaoButton from "../components/element/button/KakaoButton"

const Login = () => {
    return (
        <>  
            <Header IconType={"ArrowBack"}/>
            <Background />
            <LoginBox>
            <KakaoButton />
            </LoginBox>
        </>
    )
}

 export default Login;