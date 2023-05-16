import React from "react";
import styled from "styled-components";

function LoginButton() {
    return(
        <LoginBox>
            Login
        
        </LoginBox>
        
    )
}

export default LoginButton;

const LoginBox = styled.div`
    text-align: center;
    font-family: Ink Free;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    width: 25rem;
    height: 4rem;
    background-Color: #ffcc00;
    border-radius: 10px;
    `;