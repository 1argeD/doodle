import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SockJS from "sockjs-client";
import StompJs from "stompjs"
import styled from "styled-components";
import webstomp from 'webstomp-client';
import { websoketTest } from "../../redux/pen/penAction";
import { useDispatch } from "react-redux";



function Painting() {
    const location = useLocation();
    const dispatch = useDispatch();
    const canvasId = location.state.canvasId;
    console.log("캔버스 아이디",canvasId);
    //로그인
    const token = localStorage.getItem('refresh-token');

    const sockjs = new SockJS('http://localhost:8081/ws');

    const options = { debug: true, heartbeat: false, protocols: ['v11.stomp'] }
    const ws = webstomp.over(sockjs, options);
    console.log("ws 연결정보 확인하기",ws);

    //캔버스 관련 
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);
    const spotArr = new Array();
    var transSpot;
    spotArr.push(canvasId);
   
   
    function wsconnect() {
        try{
            transSpot = spotArr.join();
            ws.connect({},()=>{
                ws.subscribe(`/sub/testSub/${canvasId}`,function(greeting){
                    console.log("받아오는 데이터 내용확인ㅣㅣㅣㅣ"+greeting+"ㅣㅣㅣㅣ");
                },{});
                ws.send(`/pub/testSub/${canvasId}`,JSON.stringify(
                    {test : spotArr}
                )) 
               })
        } catch(e) {
            console.log(e.data);
        }
    }

    useEffect(()=>{
         //웹소켓 연결
    },[]);

   
    function waitConncet(ws, callback = () => {}) {
        setTimeout(
          function () {
            // 연결되었을 때 콜백함수 실행
            if (ws.ws.readyState === 1) {
              callback();
              // 연결이 안 되었으면 재호출
            } else {
                waitConncet(ws, callback);
            }
          },
          1 // 밀리초 간격으로 실행
        );
      }

    //데이터 보내보기
  function WSsend() {
    try{ 
        waitConncet(ws, function() {
            ws.send(`pub/testSub/${canvasId}`,
            JSON.stringify({
                test : canvasId+", 제발 갔으면 좋겠다.", 
            }),
            ) 
        }) 
    } catch(error) {console.log(error)}
  }


    //캔버스 함수
    useEffect(() => {
        let canvas_style = window.getComputedStyle(canvasSizeRef.current);
        const canvas = canvasRef.current;
        canvas.width = canvas_style.width.replace("px","");
        canvas.height = canvas_style.height.replace("px","");
    }, [])

    //팬 함수
    useEffect(()=> {
        const canvas2 = canvasRef.current;
        const ctx = canvas2.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
        setGetCtx(ctx)
    },[])

    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
    
        if(!Painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX,mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
            spotArr.push("x"+mouseX);
            spotArr.push("y"+mouseY);
            wsconnect();
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
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px auto; 
    border : 1px #373737 solid;
    width : 1522px;
    height: 1536px;
`
