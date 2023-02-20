import React, { useRef, useEffect, useState } from "react";
import Canvas  from "../components/Background"

const Canvas = () => {
    const canvasRef = useRef(null);

    const [getCtx, setGetCtx] = useState(null);

    cosnt [painting, setPainting] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 650;
        canvas.height = 540;
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx);
    }, []);
    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        getCtx.stroke();
    }

    return <Canvas>
        <div className="view">
            <div className="canvasWrap">
                <paint 
                className="canvas"
                ref={canvasRef}
                onMouseDown={() => setPainting(true)}
                onMouseUp={() => setPainting(false)}
                onMouseMove={e => drawFn(e)}
                onMouseLeave={() => setPainting(false)}    
                >
                </paint>
            </div>
        </div>
    </Canvas>
}

export default Canvas