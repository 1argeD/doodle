import React from "react";
import styled from "styled-components";

function Tool() {
    return <ToolBox>Tool</ToolBox>
} 

export default Tool

const ToolBox = styled.span`
    padding: 5px;
    text-align: left;
    font-size: 2.5rem;
    font-family: Ink Free;
    justify-content: space-between;
    position: absolution;
    gap: 2rem;
    height: 4.8rem;
    color: #FFFFFF;
`