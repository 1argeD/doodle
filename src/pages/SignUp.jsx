import React from "react";
import Header from '../components/GlobalHeader';
import SignUp from "../components/loginPage/SignUpBox";
import styled from "styled-components";

const SighnUp = () => {
    return (
        <>  
            <Header/>
            <SighnLayout>
            <SignUp></SignUp>
            </SighnLayout>
        </>
    )
}

 export default SighnUp;

 const SighnLayout = styled.div`
    margin : auto;
    margin-top : 10px;
    background-color: #373737;
    width: 50vw;
    height: 80vh;
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
 `

 