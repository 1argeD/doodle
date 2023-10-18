import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { useForm } from "react-hook-form"
import HeaderLogin from '../components/button/HeaderInbutton';
import HeaderLogOut from "./button/HeaderOutButton";

function Header() {
    const token = localStorage.getItem("access-token");
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    const navigate = useNavigate();

    let button;

    const { handleSubmit, } 
    = useForm({ mode : "onChange" });

    const loginStatusCHK = () => {
        window.location.reload();
    }

    const onPathHandler = (path) => {
        navigate(path);
    };

    if(token) {
        button = <HeaderLogOut onClick={handleSubmit(loginStatusCHK)}/>
    } else {
        button = <HeaderLogin />
    } 

        return (
            <>  
                <NavbarWrapper>
                    <Navbar>
                        <NavItem />
                        <NavItem>
                            <Logo onClick={() => onPathHandler("/")}>Doodle</Logo>
                        </NavItem>
                        <NavItem>
                            <Font>{userInfo?.nickname}</Font>
                            {button}
                        </NavItem>
                    </Navbar>
                </NavbarWrapper>
            </>
        )
    
}



export default Header;

const NavbarWrapper = styled.nav`
    margin: 0rem;
    padding: 0rem;
    height: 4.8rem;
    width: 100%;
    z-index: 10;
    position: relative;
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


const Logo = styled.div`
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`
const Font = styled.div`
    padding-top: 40px;
    font-size: 1.5rem;
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
