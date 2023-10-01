import React from 'react';
import LoginBox from '../components/loginPage/LoginBox'
import styled from 'styled-components';
import Header from '../components/GlobalHeader';


const Loginpage = () => {

    
    return  <>  <Header/>
                <LoginLayout>
                    <LoginBox/>
                </LoginLayout>
            </>
    
}

export default Loginpage;

const LoginLayout = styled.div`
    margin : auto;
    margin-top : 150px;
    background-color: #373737;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    border-radius : 3vw;
    //드래그 막는 css 태그 4개
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    >.Footer {
        margin: 100px;
    }
`;