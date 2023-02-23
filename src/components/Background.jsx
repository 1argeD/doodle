import React from "react";
import styled from "styled-components";

function Background() {
    return (
        <Canvas />
    )
}

export default Background;

const Canvas = styled.div`
    width: 800px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
