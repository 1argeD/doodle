import React from "react";
import styled from "styled-components"

function LoginBox() {
    return(
        <Box>
            <New>Login</New>
            <Text>ID : </Text><ID/>
            <Text>PW : </Text><PW/>
            <button>로그인</button>
            <button>회원가입</button>
        </Box>
    ) 
}

export default LoginBox;

const Box = styled.div`
    width : 100px;
    height : 50px;
`
const Text = styled.text`
    font-family: Ink Free;
    font-style : bold;
    color: #FFFFFF;
`

const ID = styled.input`
    width: 100px;
    height : 10px;
`
const PW = styled.input`
    width: 100px;
    height : 10px;
`

const New = styled.div`
    margin-top : 5vw;
    padding : auto;
    font-size: 5rem;
    font-family: Ink Free;
    color: #FFFFFF;
`