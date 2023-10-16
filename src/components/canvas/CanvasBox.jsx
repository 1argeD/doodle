import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCanvasList } from "../../redux/canvas/canvasAction";
import { useDispatch } from "react-redux";

function CanvasListBox(props) {
    const dispatch = useDispatch();
    const body = dispatch(getCanvasList());
    const [data, setData] = useState(null);
    const [isClick, setIsClick] = useState(null);
    
    useEffect(()=>{
        const getData = () => {
            body.then((data)=>{
                setData(data.payload)
            })
        }
        getData();
    },[])

    const onClickHandler = (data) => {
        setIsClick(data);
    }

    if(data&&data.length!=0) {
        return(
            <>
                {data.map(data=>(
                    <ListBox 
                    canvas = {data.id}
                    id = {data.id}
                    isClick = {isClick}
                    onClick={() => {{
                        onClickHandler(data.id);
                        props.setCanvas(data.id)}
                        }}>
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

const ListBox = styled.button`
    cursor: pointer;
    display : flex;
    margin : auto;
    margin-top : 50px;    
    border-radius : 20px;
    width : 60vw;
    height : 10vw;
    background-color : #FFFFFF; 
    border : ${({isClick, id}) => 
    isClick===id ? "solid 5px green" : "solid 1px #FFFFFF"
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
