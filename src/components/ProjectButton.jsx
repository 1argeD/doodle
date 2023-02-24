import React from "react";
import styled from "styled-components";


function ProjectButton() {
    return <>
        <Project>
            <New>New Project</New>
        </Project>
    </>
}

export default ProjectButton;

const Project = styled.div`
    margin-top: 16rem; 
    margin-left: auto; 
    margin-right: auto;
    width: 50rem;
    height: 12rem; 
    background-color: #373737;
    border-radius: 10px;
    cursor: pointer;
`

const New = styled.div`
    padding: 2.5rem;
    text-align: center;
    font-size: 5rem;
    font-family: Ink Free;
    color: #FFFFFF;
`