import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {useComponentSize} from "../components/useComponentSize/useComponentSiz"

function Painting() {
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);

    useEffect(() => {
        let canvas_style = window.getComputedStyle(canvasSizeRef.current);
        // useComponentSize();
        const canvas = canvasRef.current;
        canvas.width = canvas_style.width.replace("px","");
        canvas.height = canvas_style.height.replace("px","");
        console.log("캔버스는 찍히나?",canvas);
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx)
    }, [])

    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        if(!Painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX,mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
        }
    }
    
    return <>
    <CanvasStyle ref={canvasSizeRef} >
        <canvas
            ref={canvasRef} 
            className="canvas"
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => setPainting(false)}
            onMouseMove={e => drawFn(e)}
            onMouseLeave={() => setPainting(false)}
        ></canvas>
    </CanvasStyle>
    </>
}

export default Painting;

const CanvasStyle = styled.div`
    ref = {canvasRef};
    className = "canvas";
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px auto; 
    border : 1px #373737 solid;
    width : 80%;
    height: 80vw;
`