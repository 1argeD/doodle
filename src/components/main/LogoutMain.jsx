import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LogOutMain = () => {
    const token = localStorage.getItem("access-token");

    const navigate = useNavigate();

    const {
        handleSubmit,
    } = useForm({mode:"onChange"})

    const onPath = () => {
        if(token) {
            navigate("/create")
        } else {
            navigate("/login")
        }
    }

    return(
    <>
        <Project>
            <New onClick={handleSubmit(onPath)}>New Project</New>
        </Project>
    </> 
    )
    
}

export default LogOutMain;

const Project = styled.div`
    margin-top: 16%; 
    margin-left: auto; 
    margin-right: auto;
    width: 50%;
    height: 12%; 
    background-color: #373737;
    border-radius: 10px;
    cursor: pointer;
`

const New = styled.div`
    padding: 2.5vw;
    text-align: center;
    font-size: 5vw;
    font-family: Ink Free;
    color: #FFFFFF;
`