import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {getPen} from "../../redux/pen/penAction";
import { deleteCanvas } from "../../redux/canvas/canvasAction";



function SelectButton(props) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onPathHandler = (props) => {
        if(props.value==="New") {
            navigate("/create");
        } else if(props.value ==="Enter") {
            const canvasId = props.canvasId;
            const pen = dispatch(getPen(`${canvasId}`));
            const penList = Promise.resolve(pen);
            penList.then((value)=> {
                const penData = JSON.stringify(value.payload);
                navigate("canvas/"+canvasId, { state: {canvasId:`${canvasId}`, penData: `${penData}`}});  
            })
        } else if(props.value === "Delete") {
            dispatch(deleteCanvas(props.canvasId));
            window.location.reload();   
        }
    }

    return(<>
        <Button onClick={()=>onPathHandler(props)}>
            <Text>{props.value}</Text>
        </Button>
    </>    
    )
}

export default SelectButton;

const Button = styled.div`
    margin-top : 98px;
    margin-left : 10px;
    background-color : #373737;
    border-radius : 30px;
    width : 13vw;
    height : 10vw;
    cursor: pointer;
`

const Text = styled.text`
    padding : 60px;
    display : flex;
    justify-content : center;
    font-size:50px;
    color : white;
    font-family: Ink Free;
    pointer-events:none; 
`