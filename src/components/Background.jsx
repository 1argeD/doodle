import React from "react";
import styled from "styled-components";

function Background() {
    return (
        <Canvas />
    )
}

export default Background;

const Canvas = styled.div`
    margin-top : 3rem;
    margin-left: auto;
    margin-right: auto;
    width: 1300px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
