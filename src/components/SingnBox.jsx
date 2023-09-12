import react from "react";
import styled from "styled-components";




const SignUp = () => {
    return <>
        <SignUpBox>
            <Box>
                 <New>SighnUp</New>
            <Text>Email : </Text><Email /><br/>
            <Text>ID : </Text><ID/><br/>
            <Text>PW : </Text><PW/><br/>
            <Text>PWConform : </Text><PWConform/><br/>
            </Box>
            <button>가입완료</button><button herf = "/login">로그인페이지로</button>
        </SignUpBox>
    </>
    
}

export default SignUp

const SignUpBox = styled.div`
    margin : auto;
    margin-top : 30px;
    margin-bottom : 300px;
    background-color: #373737;
    width : 50vw;
    height : 50vw;     
    border-radius : 3vw;
`
const Box = styled.div`
    margin-top : 1px;;
    margin-left : 10vw;
`
const Email = styled.input`
    witdh:10vw;
    height:1vw;    
`
const ID = styled.input`
    margin-left:1.5vw;
    witdh:10vw;
    height:1vw;
`
const PW = styled.input`
    margin-left:16px;
    witdh:10vw;
    height:1vw;
`
const PWConform = styled.input`
    witdh:10vw;
    height:1vw;
`
const Text = styled.text`
    font-family: Ink Free;
    font-style : bold;
    color: #FFFFFF;
`

const New = styled.div`
    font-size: 5rem;
    font-family: Ink Free;
    color: #FFFFFF;
`