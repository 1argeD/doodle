import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import styled from "styled-components";
import webstomp from 'webstomp-client';
import { useDispatch, useSelector } from "react-redux";
import { getPen } from "../../redux/pen/penAction";
import { get,useForm } from "react-hook-form";




function Painting(props) {
    //로그인
    const token = localStorage.getItem('access-token');
    const member = JSON.parse(localStorage.getItem('user-info'));
    const memberId = member?.id;

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const canvasId = location.state.canvasId;
    const penDataO = location.state.penData;
    const penData = JSON.parse(penDataO);

    const [pen, setPen] = useState();

    console.log("팬 값이 뭐가 나오는지 찍어보기 : ", pen);

    useEffect(()=>{
        props.setCanvas(canvasId);
    },[canvasId])

    if(!token) {
        navigate("/");
    }

    const {
        handleSubmit,
    } = useForm({mode : "onChange"})

    const sockjs = new SockJS('http://192.168.35.29:8081/ws');

    const options = { debug: true, heartbeat: false, protocols: ['v11.stomp'] }
    const ws = webstomp.over(sockjs, options);
   
    function wsconnect() {
        try{
            ws.connect({},()=>{
                ws.subscribe(`/sub/canvas/${canvasId}`,
                    function(greeting){
                    console.log("받아오는 데이터 내용확인 : "+greeting.body);
                    const penInfo = JSON.parse(greeting.body);
                    setPen(penInfo);
                    drawFn();
                });
               })
        } catch(e) {
            console.log(e.data);
        }
    }

    //웹소켓 연결
    useEffect(()=> {
        wsconnect();
        ws.onclose = async (e) => {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e);
            setTimeout(function() {
              wsconnect();
            }, 1000);}
    })

    //캔버스 관련 
    const canvasRef = useRef(null);
    const canvasSizeRef = useRef(null);
    const [getCtx, setGetCtx] = useState(null);
    const [Painting, setPainting] = useState(false);
    const [spotArr, setSpotArr] = useState([]);
    const [widthArr, setWidthArr] = useState([]);
    const [heightArr, setHeightArr] = useState([]);

    const x = new Array();
    const y = new Array(); 

    var ctx;

   function wssend() {
    try{
        ws.send(`/pub/canvas/${canvasId}`,JSON.stringify(
            {   
                canvasId : canvasId,
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
        ctx = canvas2.getContext("2d");

        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = pen?.color;

        setGetCtx(ctx);
    },[])


    //저장된 그림 가져오기
    useEffect(() => {
        drawPen();
    },[getCtx]) 



    //캔버스에 그림그리기
    const drawFn = e => {
        const spot = pen?.spot;
        
        var xPoint;
        var yPoint;
        if(pen!=null&&getCtx!=null){
            for(var i=0; i<spot.length;i++){
                xPoint = spot[i].indexOf('y') ? spot[i].replace('x',"") : null;
                yPoint = spot[i].indexOf('x') ? spot[i].replace('y',"") : null;
                if(xPoint!=null) {
                    x.push(xPoint);
                } else if(yPoint!=null) {
                    y.push(yPoint);
                }
            }
          for(var i=0; i<x.length-1; i++){
            getCtx.beginPath();
            getCtx.moveTo(x[i], y[i]);
            getCtx.lineTo(x[i+1], y[i+1]);
            getCtx.stroke();
        }    
        x.length=0;
        y.length=0;
        }
    }

    //캔버스에 좌표 저장하기
    const saveSpot = e => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;

        if(!Painting) {
            getCtx.beginPath();
            getCtx.moveTo(mouseX, mouseY);
        }  else {
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
            spotArr.push("x"+mouseX);
            spotArr.push("y"+mouseY);
            setSpotArr(spotArr);
        }
    }

    //화면에 그림 뿌려주기
    const drawPen = e => {
        if(getCtx!=null) {
            var mouseX;
            var mouseY;
            for(var i=0; i<penData.length; i++) {
                for(var j=0; j<penData[i].spot.length; j++) {
                    mouseY = penData[i].spot[j].indexOf('x') ? penData[i].spot[j].replace('y',"") : null;
                    mouseX = penData[i].spot[j].indexOf('y') ? penData[i].spot[j].replace('x',"") : null;     
                    if(mouseX!=null) {
                        x.push(mouseX);
                    } else if(mouseY!=null) {
                        y.push(mouseY);
                    }
                    for(var k=0; k<x.length-1; k++) {
                        getCtx.beginPath();
                        getCtx.moveTo(x[k], y[k]);
                        getCtx.lineTo(x[k+1], y[k+1]);
                        getCtx.stroke();
                    } 
                }
                x.length=0;
                y.length=0;
            }
        } else {

        }
    }

    const customHandler=()=> {
        setPainting(false);
        if(spotArr.length!=0) {
            wssend();
            spotArr.length=0;
        }
    }

      


    return (
        <>
    <CanvasStyle ref={canvasSizeRef} >
        <canvas
            ref={canvasRef} 
            className="canvas"
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => handleSubmit(customHandler())}
            onMouseMove={e => saveSpot(e)}
            onMouseLeave={() => setPainting(false)}
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
