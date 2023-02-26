import React from "react";
import Background from "../components/Background";
import Header from '../components/GlobalHeader';
import LoginBox from "../components/LoginBox";

const Login = () => {
    return (
        <>  
            <Header IconType={"ArrowBack"}/>
            <Background />
            <LoginBox />
        </>
    )
}

 export default Login;