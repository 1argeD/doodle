import React from "react";
import styled from "styled-components";
import Background from "./Background";

function LoginBox() {
    return <>
            <NavWapper>
                <Background></Background>
                <NavBar>
                <Box>
                    <Text>Login</Text>
                    <Put>Push ID</Put>
                    <NavItem>
                    <Put>Push PW</Put>
                    </NavItem>
                    <Kakao>Login with kakao</Kakao>
                </Box>
                </NavBar>
            </NavWapper>
            </>
}

export default LoginBox;

const NavWapper = styled.nav`
    display: flex;
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavItem = styled.div`
    margin-top: 4rem;
`

const Box = styled.div`
    width: 30rem;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    height : 30rem;
    border-radius: 10px;
    background-Color: #373737;
`

const Put = styled.div`
    text-align: center;
    font-family: Ink Free;
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: auto;
    width: 25rem;
    height: 5rem;
    cursor: pointer;
    background-Color: #FFFFFF;
`
const Text = styled.div`
    padding: auto;
    margin-top: 1rem;
    margin-left: 12rem;
    margin-right: 12rem;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`

const Kakao = styled.div`
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
    linear-gradient(90deg, #cdcccc 0px, #cdcccc 1px, transparent 1px, transparent 99px,  transparent 100px);
`


