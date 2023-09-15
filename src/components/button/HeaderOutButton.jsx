import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import { userLogOut } from "../../redux/user/userAction";



function HeaderLogOut() {
    const dispatch = useDispatch();
    const logoutInfo = useSelector((state) => state.user.logoutInfo);

    const onClickSubmitHandler = () => {
        if(logoutInfo) {
            dispatch(userLogOut());
            window.location.href = "/";
        }
    }

    return (
        <NavItem>
            <SignIn onClick={onClickSubmitHandler}>Logout</SignIn>
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