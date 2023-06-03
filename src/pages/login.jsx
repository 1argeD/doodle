import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Loginform from '../components/LoginBox'
import Footer from '../components/loginPage/Footer';
import styled from 'styled-components';



const Loginpage = () => {
    // const isLogin = useSelector((state) => state.user.isLogin);
    const loggedUserName = useSelector((state) => state.userSlice.userName);
    return (
        <LoginLayout>
            <Loginform/>
            <Footer/>
            {loggedUserName !== null && <Navigate to="/main" replace={true} />}
        </LoginLayout>
    );
}

export default Loginpage;

const LoginLayout = styled.div`
    background-color: #FFEB33;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    //드래그 막는 css 태그 4개
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    >.Footer {
        margin: 100px;
    }
`;