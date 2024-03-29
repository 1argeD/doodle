import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../button/HeaderInbutton';
import HeaderLogOut from "../button/HeaderOutButton";
import styled from "styled-components";
import Tool from "./ToolBox";
import InvitePop from "../popup/Popup";
import { useState } from "react";


function Header2(props) {
    const token = localStorage.getItem("access-token");
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);

    const canvasId = props;

    const { handleSubmit, } 
    = useForm({ mode : "onChange" });

    const onPathHandler = (path) => {
        navigate(path);
    };


    const onClickHandler = (props) => {
        setPopup(!props);
    }

    let button;

    if(token) {
        button = <HeaderLogOut/>
    } else {
        button = <HeaderLogin />
    } 


    let popupState;

    if(popup) {
        popupState = <InvitePop 
            canvasId={canvasId}
        ></InvitePop>
    } else {
        popupState = null;
    }

    return (
            <>  
                <NavbarWrapper>
                    <Navbar>
                        <NavItem>
                            <Tool>tool</Tool>
                        </NavItem>
                        <NavItem>
                            <Logo onClick={() => onPathHandler("/")}>Doodle</Logo>
                        </NavItem>
                        <NavItem>
                            <Invite 
                            onClick = {()=>{onClickHandler(popup)}}
                            >Invite</Invite>
                            <Font>{userInfo?.nickname}</Font>
                            {button}
                        </NavItem>
                    </Navbar>
                </NavbarWrapper>
                {popupState}
            </>
        )
}

export default Header2;

const NavbarWrapper = styled.nav`
    margin: 0rem;
    padding: 0rem;
    height: 4.8rem;
    width: 100%;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    background-color: #373737;
`

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.8rem;
`;


const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
  cursor: pointer;
  width: fit-content;
`;

const Font = styled.div`
    padding-top: 40px;
    font-size: 1.5rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`

const Logo = styled.div`
    padding-top: 10px;
    text-align: center;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`

const Invite = styled.div`
    padding-top: 50px;
    font-size: 1.5rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`
