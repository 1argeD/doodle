import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Tool() {
    const [state, setState] = useState(false);

    const onClickHandler = (state) => {
        setState(!state);
    }

    return <ToolBox
        onClick={()=>onClickHandler(state)}
        state={state}
    >Tool</ToolBox>
} 

export default Tool

const ToolBox = styled.div`
    padding: 5px;
    text-align: left;
    font-size: 2.5rem;
    font-family: Ink Free;
    justify-content: space-between;
    position: absolution;
    gap: 2rem;
    height : ${({state})=> state ? "3220px" : "100%"};
    background-color : #373737;
    color: #FFFFFF;
`