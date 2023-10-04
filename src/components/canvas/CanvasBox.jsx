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
    const [isMouse, setIsMouse] = useState(null);
    
    useEffect(()=>{
        const getData = () => {
            body.then((data)=>{
                setData(data.payload)
            })
        }
        getData();
    },[])

   
    const onMouseHandler = (data) => {
        setIsMouse(data);
    }

    const onMouseLeaveHandler = (data) => {
        setIsMouse(null);
    }

    const onClickHandler = (props) => {
        const canvasId = props;
        navigate("canvas/"+canvasId, { state: {canvasId:`${canvasId}`}});   
    }

    if(data) {
        return(
            <>
                {data.map(data=>(
                    <ListBox 
                    canvas = {data.id}
                    id = {data.id}
                    isMouse = {isMouse}
                    onMouseLeave = {() => onMouseLeaveHandler(data.id)}
                    onMouseOver={() => onMouseHandler(data.id)} 
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

    border : ${({isMouse, id}) =>
    isMouse===id ? "solid 5px green" : "solid 1px #FFFFFF"
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