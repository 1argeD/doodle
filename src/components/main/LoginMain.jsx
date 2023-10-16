import React from "react";
import styled from "styled-components";
import CanvasBox from "../canvas/CanvasListBox";
import SelectButton from "../button/Clickbutton";
import { useState } from "react";


const LoginMain = (props) => {
    const [canvas, setCanvas] = useState(null);

    return(<>
             <Wrapper>
            <CanvasBox setCanvas = {setCanvas}/>
                <Wrapper2>
                <SelectButton value={"New"}></SelectButton>
                <SelectButton value={"Enter"} canvasId = {canvas}></SelectButton>
                <SelectButton value={"Delete"} canvasId = {canvas}></SelectButton>
                </Wrapper2>
            </Wrapper>
        </>
        )
}
export default LoginMain


const Wrapper = styled.div`
    display : flex;
    margin-left : 130px;
`

const Wrapper2 = styled.div`
`
