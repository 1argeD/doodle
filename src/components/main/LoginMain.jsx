import React from "react";
import styled from "styled-components";
import CanvasBox from "../canvas/CanvasListBox";
import SelectButton from "../button/Clickbutton";


const LoginMain = () => {
    return(<>
             <Wrapper>
            <CanvasBox/>
                <Wrapper2>
                <SelectButton value={"New"} ></SelectButton>
                <SelectButton value={"Enter"}></SelectButton>
                <SelectButton value={"Delete"}></SelectButton>
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
