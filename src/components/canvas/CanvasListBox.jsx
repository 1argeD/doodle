import React, { useState } from "react";
import styled from "styled-components";
import CanvasListBox from "./CanvasBox";


const CanvasBox = (props) => {
    const [canvas, setCanvas] = useState(null);
    
    return (
        <>
        <Box>
            <CanvasListBox 
            setCanvas = {setCanvas}
            onclick={props.setCanvas(canvas)}/>
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
