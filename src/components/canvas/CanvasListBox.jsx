import React, { useState } from "react";
import styled from "styled-components";
import CanvasListBox from "./CanvasBox";


const CanvasBox = () => {
    return (
        <>
        <Box>
            <CanvasListBox />
        </Box>
        </>
    )
} 


export default CanvasBox;

const Box = styled.div`
    margin-top : 100px;
    width : 70vw;
    height : 40vw;
    background-color : #373737;
    border-radius : 40px;
`
