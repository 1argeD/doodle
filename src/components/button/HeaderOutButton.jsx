import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

function HeaderLogOut() {
    const navigate = useNavigate();
    
    const onPathHandler = (path) => {
        navigate(path);
    };

    return (
        <NavItem>
            <SignIn onClick={() => onPathHandler("/login")}>Logout</SignIn>
        </NavItem>
    )
}

export default HeaderLogOut;

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

const SignIn = styled.div`
    padding-top: 50px;
    margin: 20px;
    font-size: 1.5rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`