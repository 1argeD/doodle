import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {postCanvas} from "../../redux/canvas/canvasAction"


function CreateBox() {
    const dispatch = useDispatch();

    const {
        register,
        watch,
        handleSubmit,
        formState : {isDirty, errors}
    } = useForm({mode : "onChange"})


    const onSubmit = () => {
        console.log("버튼 작동 확인")
        const body = {
            canvasTitle : watch().canvasTitle,
            with : {},
        }
        dispatch(postCanvas(body));
    }

    const onError = (errors) => {
        console.log(errors);
    }

    return <>
        <Box>
        <>  
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Title>Title :<Input
            type = "text"
            className="input"
            name="canvasTitle"
            {...register("canvasTitle",
                require = "올바른 제목을 입력해주세요",
            )}
            aria-invalid={
                !isDirty ? undefined : errors.title ? true : false
            }
            /></Title>
            <Button 
            >submit</Button><Button>cancel</Button>
        </Form>
        </>
        <>
        </>
        </Box>
    </>
}

export default CreateBox;

const Form = styled.form`
    dispaly : flex;
` 

const Box = styled.div`
    margin-left : auto;
    margin-right : auto;
    margin-top : 12rem;
    background-color : #373737;
    border-radius : 4.5vw;
    width : 60%;
    height : 45vw;
`


const Title = styled.div`
    margin-left : 2rem;
    padding-top: 15rem;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`

const Button = styled.button`
    margin-top : 3vw;
    border-radius : 20px;
    float:left;
    margin-left : 20rem;
    padding-top: 2rem;
    font-size: 2rem;
    font-family: Ink Free;
    background-color: #373737;
     color: #FFFFFF;
     width : 40rem;
`
const Input = styled.input`
    margin-left : 6rem;
    width : 50rem;
    height : 4rem;
`
