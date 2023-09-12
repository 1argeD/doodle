import React from "react";
import styled from "styled-components";

function Painting() {
    return <>
        <Canvas></Canvas>
    </>
}

export default Painting;

const Canvas = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px auto; 
    border : 1px #373737 solid;
    width : 80%;
    height: 80vw;
`