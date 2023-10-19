import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";
import styled from "styled-components";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { inviteUser } from "../../redux/canvas/canvasAction";

function InvitePop(props) {
    const canvasId = props.canvasId;
     console.log("캔버스 아이디 값 확인해보기 : ",canvasId)
    const [nickArr, setNickArr] = useState([]);
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const {
        register,
        watch,
        handleSubmit,
        formState : {isDirty, errors}
    } = useForm({mode : "onChange"})
    
    const onSubmit =() =>{
        const body = watch().nickname;
        console.log("body데이터값 확인해보기 ? : ", body)
        nickArr.push(body)
        setNickArr(nickArr);
        console.log("배열이 저장되는지 확인해 보기 : ",nickArr)
    }

    const onError = (error) => {
        console.log(error)
    }

    const onClickHandler = (props, canvas) => {
        console.log("canvasId값 확인해 보기 : ",canvas)
        // console.log("state값 찍어보기 : ",state)
        console.log("props값 찍어보기 : ",props);
        if(state) {
            const canvasId = JSON.stringify(canvas);
            const nickname = JSON.stringify(props);
            dispatch(inviteUser({canvasId, nickname}));
            setState(false);
        }
    }

  


    return(
        <>
            <InvitePopup>
                <FromWrapper>
                <Form onSubmit={handleSubmit(onSubmit,onError)}>
                <Input
                type = "text" 
                nickname = "nickname"
                {...register("nickname",{
                    require : "올바른 닉네임을 적어주세요."
                })}
                aria-invalid={
                    !isDirty ? undefined : errors.nickname ? true : false
                }
                />
                {nickArr.map((value)=>(<div key = {uuid()}>{value}</div>))}
                
                <Button>입력하기</Button>
                </Form>
                </FromWrapper>
                <Button2 
                    state = {state}
                    canvasId = {canvasId}
                    onClick={()=>{handleSubmit(setState(true),onClickHandler(nickArr,canvasId))}}>초 대</Button2>
            </InvitePopup>
        </>
    )
}

export default InvitePop;

const FromWrapper = styled.div`
    display:flex;
`

const InvitePopup = styled.div`
    margin : 25%;    
    width : 800px;
    height : 650px;
    background-color : FFFFFF;
    border : solid 1px black;
    position: absolute;
    z-index: 1000;
    box-sizing: border-box;
`

const Input = styled.input`
    margin : 20%;
    width : 500px;
    height : 50px; 
`

const Button = styled.button`
    widht : 500px;
    height : 50px;
    dispaly : flex;
`

const Button2 = styled.button`
    widht : 500px;
    height : 50px;
    dispaly : flex;
`


const Form = styled.form`
    dispaly : flex;
` 