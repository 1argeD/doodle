import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { useSelector } from "react-redux";
import { userLogOut } from "../redux/user/userAction";
import { useForm } from "react-hook-form"
import HeaderLogin from '../components/button/HeaderInbutton';
import HeaderLogOut from "./button/HeaderOutButton";

function Header() {
    const isLogin = useSelector((state) => state.user.userToken);
    const navigate = useNavigate();

    const { handleSubmit, } 
    = useForm({ mode : "onChange" });

    const onPathHandler = (path) => {
        navigate(path);
    };

    const onClickSubmitHandler = () => {
        userLogOut();
      
    }

    let button;

    if(isLogin!=null) {
        button = <HeaderLogin/>       
    } else {
        button = <HeaderLogOut/>
    } 
        return (
            <>  
                <NavbarWrapper>
                    <Navbar>
                        <NavItem />
                        <NavItem>
                            <Logo onClick={() => onPathHandler("/")}>Doodle</Logo>
                        </NavItem>
                        {button}
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