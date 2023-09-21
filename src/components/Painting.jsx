import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import styled from "styled-components";


function Painting() {
    //로그인
    // const token = localStorage.getItem('access-token');

    // var sockjs = new SockJS('http://127.0.0.1:8081/ws');
    // let supcription;
    // const ws = webstomp.over(sockjs);

    //웹소켓 관련
    const stompClient = useRef(null);

    //캔버스 관련 
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);


    //캔버스 함수
    useEffect(() => {
        let canvas_style = window.getComputedStyle(canvasSizeRef.current);
        const canvas = canvasRef.current;
        canvas.width = canvas_style.width.replace("px","");
        canvas.height = canvas_style.height.replace("px","");
        console.log("캔버스 크기 보기",canvas);
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx)
    }, [])

    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        console.log("x좌표확인",mouseX);
        const mouseY = e.nativeEvent.offsetY;
        console.log("y좌표확인",mouseY);
        if(!Painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX,mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
        }
    }
    

    //웹소켓 함수
       
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
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px auto; 
    border : 1px #373737 solid;
    width : 1522px;
    height: 1536px;
`