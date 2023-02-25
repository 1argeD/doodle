import React from "react";
import styled from "styled-components";
import KakaoButton from "./element/button/KakaoButton";

function LoginBox() {
    return <>
            <NavWapper>
                <NavBar>
                        <Box>
                            <Text>Login</Text>
                            <Put>Push ID</Put>
                            <NavItem>
                            <Put>Push PW</Put>
                            </NavItem>
                            <KakaoButton />
                        </Box>
                </NavBar>
            </NavWapper>
            </>
}

export default LoginBox;

const NavWapper = styled.nav`
    margin-top:3rem;
    top: 50%;
    left:50%;
    display: flex;
    position: absolute;
    z-index: 5;
    transform: translate(-50%, -50%);
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
    text-align: center;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`


