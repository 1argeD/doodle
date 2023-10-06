import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SockJS from "sockjs-client";
import styled from "styled-components";
import webstomp from 'webstomp-client';
import { useDispatch, useSelector } from "react-redux";
import { getPen } from "../../redux/pen/penAction";



function Painting() {
    const location = useLocation();
    const dispatch = useDispatch();
    const canvasId = location.state.canvasId;


    //로그인
    const token = localStorage.getItem('access-token');
    const member = JSON.parse(localStorage.getItem('user-info'));
    const memberId = member?.id;
    console.log("유저 정보 확인 : "+ memberId);


    const sockjs = new SockJS('http://localhost:8081/ws');

    const options = { debug: true, heartbeat: false, protocols: ['v11.stomp'] }
    const ws = webstomp.over(sockjs, options);
    console.log("ws 연결정보 확인하기",ws);

    //캔버스 관련 
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);
    const [data, setData] = useState(null);
    const spotArr = new Array();
   
   
    function wsconnect() {
        try{
            ws.connect({},()=>{
                ws.subscribe(`/sub/canvas/${canvasId}`,function(greeting){
                    console.log("받아오는 데이터 내용확인ㅣㅣㅣㅣ"+greeting+"ㅣㅣㅣㅣ");
                },{});
               })
        } catch(e) {
            console.log(e.data);
        }
    }

    //웹소켓 연결
    useEffect(()=> {
        const data = dispatch(getPen(canvasId))
        const getData = () =>{
            data.then((data)=>{
                setData(data.payload);
            })
        }
        console.log("데이터값 읽어보기 : " , data);
        getData();
        wsconnect();
    })

   function wssend() {
    try{
        ws.send(`/pub/canvas/${canvasId}`,JSON.stringify(
            {   
                memberId : memberId,
                color : "black",
                spot : spotArr
            }
        ),
        {token:token}
        ) 
    } catch(e) {
        console.log(e.data);
    }
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
            wssend();
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
