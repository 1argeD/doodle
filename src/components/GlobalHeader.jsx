import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components"

function Header() {
    return (
            <>
                <NavbarWrapper>
                    <Navbar>
                        <Link to="/">
                            <h1>글로벌 헤더</h1>
                        </Link>
                    </Navbar>
                </NavbarWrapper>  
            </>
    )
}

export default Header;

const NavbarWrapper = styled.div`
  margin: 0;
  z-index: 5;
  padding: 0;
  height: 4.8rem;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
`;

const Navbar = styled.nav`
    height: 4.8rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: #373737;
`;