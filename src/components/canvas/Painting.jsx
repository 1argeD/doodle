import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SockJS from "sockjs-client";
import styled from "styled-components";
import webstomp from 'webstomp-client';
import { useDispatch, useSelector } from "react-redux";
import { getPen } from "../../redux/pen/penAction";
import { get,useForm } from "react-hook-form";



function Painting() {
    //로그인
    const token = localStorage.getItem('access-token');
    const member = JSON.parse(localStorage.getItem('user-info'));
    const memberId = member?.id;
    
    const location = useLocation();
    const dispatch = useDispatch();
    const canvasId = location.state.canvasId;
    const penDataO = location.state.penData;
    const penData = JSON.parse(penDataO);

    const {
        handleSubmit,
    } = useForm({mode : "onChange"})

    
    if(penData[0]==undefined){
        console.log("변화된 데이터 값 확인하기 : ",penData[0]);
    } else{
        console.log("변화된 데이터 값 확인하기 : ",penData[0].spot);
    }

    const sockjs = new SockJS('http://localhost:8081/ws');

    const options = { debug: true, heartbeat: false, protocols: ['v11.stomp'] }
    const ws = webstomp.over(sockjs, options);
   
    function wsconnect() {
        try{
            ws.connect({},()=>{
                ws.subscribe(`/sub/canvas/${canvasId}`,function(greeting){
                    console.log("받아오는 데이터 내용확인 : "+greeting);
                },{});
               })
        } catch(e) {
            console.log(e.data);
        }
    }

    //웹소켓 연결
    useEffect(()=> {
        wsconnect();
    })

    //캔버스 관련 
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);
    const [spotArr, setSpotArr] = useState([]);
    const [widthArr, setWidthArr] = useState([]);
    const [heightArr, setHeightArr] = useState([]);
   
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
    },[])

    //팬 설정 함수
    useEffect(()=> {
        const canvas2 = canvasRef.current;
        const ctx = canvas2.getContext("2d");

        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";

        setGetCtx(ctx);
    },[])

    //캔버스에 그림그리기
    const drawFn = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
    
        if(!Painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
        } else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
            spotArr.push("x"+mouseX);
            spotArr.push("y"+mouseY);
            setSpotArr(spotArr);
        }
    }

    useEffect(() => {
        drawPen(); 
    },[]) 

    //화면에 그림 뿌려주기
    const drawPen = e => {
     
        if(getCtx!=null) {
            var mouseX;
            var mouseY;
            const s = new Array(); 
            for(var i=0; i<penData.length; i++) {
                for(var j=0; j<penData[i].spot.length; j++) {
                    mouseY = penData[i].spot[j].indexOf('x') ? penData[i].spot[j].replace('y',"") : null;
                    mouseX = penData[i].spot[j].indexOf('y') ? penData[i].spot[j].replace('x',"") : null;     
                    if(mouseX!=null) {
                        s.push(mouseX);
                    } else if(mouseY!=null) {
                        s.push(mouseY);
                    }
                    for(var k=0; k<s.length-3; k++) {
                        getCtx.beginPath();
                        getCtx.moveTo(s[k], s[k+1]);
                        getCtx.lineTo(s[k+2], s[k+3]);
                        getCtx.stroke();
                        getCtx.closePath();
                    } 
                }
                s.length=0;
            }
        } else {

        }
    }

    const customHandler=()=> {
        setPainting(false);
        if(spotArr.length!=0) {
            wssend();
        }
        spotArr.length=0;
    }


    //div의 너비 높이를 정의해줄 함수
    // const draw = () => {
    //     var maxX;
    //     var minX;

    //     var maxY;
    //     var minY;

    //     var mouseX=0;
    //     var mouseY=0; 

    //     for(var i=0; i<penData.length; i++){
    //         for(var j=0; j<penData[i].spot.length; j++) {
    //             if(penData[i].spot[j].indexOf('y')) {
    //                 mouseX  = penData[i].spot[j].replace('x',"")
    //                 const x = penData[i].spot[0].replace('x',"")
    //                 minX = Math.min(x, mouseX);
    //                 maxX = Math.max(x, mouseX); 
    //             } else if(penData[i].spot[j].indexOf('x')){
    //                 mouseY = penData[i].spot[j].replace('y',"")
    //                 const y = penData[i].spot[1].replace('y',"")
    //                 minY = Math.min(y, mouseY);
    //                 maxY = Math.max(y, mouseY);
    //             }
    //             const width = Math.abs(maxX-minX);
    //             const height = Math.abs(maxY-minY);
                
    //         }
    //         }
    //     }
    
    return (
        <>
    <CanvasStyle ref={canvasSizeRef} >
    {penData?.map((value)=>(
        <div
            id={value.id}
            style={{
                width : "20px",
                height: "20px",
                color : "black",
                border : "1px #000000 solid",
                position : "absolute",
                zIndex: 9999,
            }}
        ></div>
    ))}
        <canvas
            ref={canvasRef} 
            className="canvas"
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => setPainting(false)}
            onMouseMove={e => drawFn(e)}
            onMouseLeave={() => handleSubmit(customHandler())}
        ></canvas>
    </CanvasStyle>
    </>
    )
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
