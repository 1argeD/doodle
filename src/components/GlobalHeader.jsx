import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

function Header() {
    const navigate = useNavigate();

    const onPathHandler = (path) => {
        navigate(path);
    };

    return (
            <>  
                <NavbarWrapper>
                    <Navbar>
                        <NavItem />
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

export default Header;

const NavbarWrapper = styled.nav`
    margin: 0rem;
    padding: 0rem;
    height: 4.8rem;
    width: 100%;
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
    margin-left: 81px;
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