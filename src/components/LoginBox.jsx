import React from "react";
import styled from "styled-components";

function LoginBox() {
    return <>
            <NavWapper>
                <NavBar>
                <Box>
                    <Text>Login</Text>
                    <Put>어디에 있음?</Put>
                    <NavItem>
                    <Put>어디에 있음?</Put>
                    </NavItem>
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
    margin-top: 10rem;
`

const Box = styled.div`
    width: 30rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    height : 30rem;
    border-radius: 5%;
    Background-Color: #373737;
`

const Put = styled.div`
    margin-top: 0.1rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: auto;
    width: 25rem;
    height: 5rem;
    cursor: pointer;
    Background-Color: #FFFFFF;
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


