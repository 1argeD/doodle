import React from "react";
import styled from "styled-components";

function Background() {
    return (
        <Canvas />
    )
}

export default Background;

const Canvas = styled.div`
    width: 50rem;
    height: 50rem;
    background-color: black;
    position: relative;
    z-index: 1;
`
