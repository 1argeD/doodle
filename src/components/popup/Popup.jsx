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
        const body = {
            nickname : watch().nickname,
        }
        nickArr.push(body)
        setNickArr(nickArr);
        console.log("혹시 이것도 작동하는거임?")
    }

    const onError = (error) => {
        console.log(error)
    }

    const onClickHandler = (props, canvasId) => {
        console.log("canvasId값 확인해 보기 : ",canvasId)
        console.log("state값 찍어보기 : ",state)
        if(state) {
            const inviteData = JSON.stringify(props, canvasId);
            dispatch(inviteUser(inviteData));
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
                {nickArr.map((value)=>(<div key = {uuid()}>{value.nickname}</div>))}
                
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