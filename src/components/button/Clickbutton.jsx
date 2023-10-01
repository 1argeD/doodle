import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


function SelectButton(props) {
    
    const navigate = useNavigate();

    const onPathHandler = (props) => {
        if(props.value==="New") {
            navigate("/create");
        } else if(props.value ==="enter") {

        } else if(props.value === "delete") {

        }
    }

    return(<>
        <Button onClick={()=>onPathHandler(props)}>
            <Text>{props.value}</Text>
        </Button>
    </>    
    )
}

export default SelectButton;

const Button = styled.div`
    margin-top : 98px;
    margin-left : 10px;
    background-color : #373737;
    border-radius : 30px;
    width : 13vw;
    height : 10vw;
    cursor: pointer;
`

const Text = styled.text`
    padding : 60px;
    display : flex;
    justify-content : center;
    font-size:50px;
    color : white;
    font-family: Ink Free;
    pointer-events:none; 
`