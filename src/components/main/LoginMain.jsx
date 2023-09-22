import React from "react";
import styled from "styled-components";
import CanvasBox from "../canvas/CanvasListBox";
import SelectButton from "../button/Clickbutton"


const LoginMain = () => {
    return(<>
             <Wrapper>
            지금 되는중이다
            <CanvasBox />
                <Wrapper2>
                <SelectButton></SelectButton>
                <SelectButton></SelectButton>
                <SelectButton></SelectButton>
                </Wrapper2>
            </Wrapper>
        </>
        )
}

export default LoginMain

const Wrapper = styled.div`
    display : flex;
`

const Wrapper2 = styled.div`
`

const Text = styled.text`
    font-family: Ink Free;
`