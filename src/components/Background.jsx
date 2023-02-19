import React from "react";
import styled from "styled-components";

function Background() {
    return (
        <Canvas />
    )
}

export default Background;

const Canvas = styled.div`
    width: 100%;
    textAligin: "center";
    lineHeight: "0,1";
    margin: "10px 0 20px";
    borderBottom: "1px solid #aaa";
    background-color: #f6f6f6;
`
