import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Painting = () => {
    const canvasRef = useRef(null);

    const [getCtx, setGetCtx] = useState(null);

    const [painting, setPainting] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1300;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx);
    }, []);


    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;

        if (!painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
        }
    }

    return <Background>
          <canvas 
            className="canvas"
            ref={canvasRef}
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => setPainting(false)}
            onMouseMove={e => drawFn(e)}
            onMouseLeave={() => setPainting(false)}
          >
          </canvas>
    </Background>
}

export default Painting;

const Background = styled.div`
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 1300px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
