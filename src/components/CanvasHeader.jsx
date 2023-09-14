import React from "react";
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../components/button/HeaderInbutton';
import HeaderLogOut from "./button/HeaderOutButton";
import styled from "styled-components";

function Header2() {
    /*
    hook 2개를 사용 권장 하지 않으니 후에 로그인 기능이 완성 되면 tool기능과 로그인 감지 기능을 개발 후에 
    해당 파일은 삭제하고 GlobalHeaer에 삽입할 것
    */
    const navigate = useNavigate();

    const onPathHandler = (path) => {
        navigate(path);
    };

    return (
            <>  
                <NavbarWrapper>
                    <Navbar>
                        <NavItem>
                            <Tool>Tool</Tool>
                        </NavItem>
                        <NavItem>
                            <Logo onClick={() => onPathHandler("/")}>Doodle</Logo>
                        </NavItem>
                        <NavItem>
                            <SignIn onClick={() => onPathHandler("/login")}>Login</SignIn>
                        </NavItem>
                    </Navbar>
                </NavbarWrapper>
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

const Tool = styled.div`
    padding-top: 50px;
    margin: 20px;
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

const SignIn = styled.div`
    padding-top: 50px;
    margin: 20px;
    font-size: 1.5rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`