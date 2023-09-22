import React from "react";
import styled from "styled-components";


function SelectButton() {
    console.log("실행은 되고 있나요?")
    
    return(<>
        <Button></Button>
    </>    
    )
}

export default SelectButton;

const Button = styled.div`
    margin-top : 100px;
    margin-left : 10px;
    background-color : #373737;
    border-radius : 30px;
    width : 13vw;
    height : 10vw;
`