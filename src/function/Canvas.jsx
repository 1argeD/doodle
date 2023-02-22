import React, { useRef, useEffect, useState } from "react";
import Background  from "../components/Background";
import styled from "styled-components";

const Painting = () => {
    const canvasRef = useRef(null);

    const [getCtx, setGetCtx] = useState(null);

    const [painting, setPainting] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
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
        <View>
            <CanvasWrap>
                <Canvas
                ref={canvasRef}
                width="650"
                height={"500"}
                onMouseDown={() => setPainting(true)}
                onMouseUp={() => setPainting(false)}
                onMouseMove={e => drawFn(e)}
                onMouseLeave={() => setPainting(false)}    
                >
                </Canvas>
            </CanvasWrap>
        </View>
    </Background>
}

export default Painting;

const View = styled.div``

const CanvasWrap = styled.div``

const Canvas = styled.div``