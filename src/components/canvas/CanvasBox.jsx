import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCanvasList } from "../../redux/canvas/canvasAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CanvasListBox() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const body = dispatch(getCanvasList());
    const [data, setData] = useState(null);
    const [isMouse, setIsMouse] = useState(false);
    
    useEffect(()=>{
        const getData = () => {
            body.then((data)=>{
                setData(data.payload)
            })
        }
        getData();
    },[])

   
    const onMouseHandler = (isMouse, data) => {
        console.log("데이터 정보확인 : ", data)
        console.log("온 마우스 확인");
        setIsMouse(!isMouse);
        console.log("마우스가 올라갔을때 : ",isMouse);
    }

    const onClickHandler = (props) => {
        
    }

    if(data) {
        return(
            <>
                {data.map(data=>(
                    <ListBox 
                    id = {data.id}
                    isMouse = {isMouse}
                    onMouseOver={() => onMouseHandler(isMouse, data.id)} 
                    onClick={() => onClickHandler(data.id)}>
                        <Text data={data} key={data.id}>title : {data.canvasTitle}</Text>
                    </ListBox>
                ))}
            </>)
    } else {
        return(
            <ListBox>
                    <Text>방을 생성해 주세요</Text>
            </ListBox>
        )
    }
}
 
        

export default CanvasListBox;

const ListBox = styled.div`
    cursor: pointer;
    display : flex;
    margin : auto;
    margin-top : 50px;    
    border-radius : 20px;
    width : 60vw;
    height : 10vw;
    background-color : #FFFFFF; 
    border : ${({isMouse}) =>
    isMouse ? "solid 1px #FFFFFF" : "solid 5px green"
}
`

const Text = styled.div`
    padding : 60px;
    display : flex;
    justify-content : center;
    font-size:50px;
    color : #000000;
    font-family: Ink Free;
`