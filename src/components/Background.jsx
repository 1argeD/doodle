import React from "react";
import styled from "styled-components";

function Background() {
    return (
        <Canvas />
    )
}

export default Background;

const Canvas = styled.div`
    margin-top: 20rem;
    display: flex;
    width: 100%;
    height: 0.025rem;
    background-color: black;
    position: relative;
    z-index: 1;
`
