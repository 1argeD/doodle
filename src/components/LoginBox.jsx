import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../redux/user/userSlice";
import { LoginButton } from "./element/button/LoginButton";

const LoginBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const success = useSelector((state) => state.user.userToken);

    const {
      watch,  
      register,
      handleSubmit,
      formState: { isDirty, errors},
    } = useForm({mode: "onChange"});

    const onSubmit = (payload, thunkAPI) => {
        dispatch(userLogin(payload));
    };

    const goToRegister = () => {
        navigate("/Register")
    }

    return <>
            <NavWapper>
                <NavBar>
                    <Box onSubmit={handleSubmit(onSubmit)}>
                        <Text>Login</Text>
                        <Container>
                            <Put>Push ID</Put>
                            <inputWapper>
                                <Input 
                                type="text"
                                tabIndex="2"
                                className="input"
                                {...register("userId", {
                                    required : "가입한 이메일을 적어주세요",
                                })}
                                aria-invalid={
                                    !isDirty ? undefined : errors.userId ? "true" : "false"
                                }
                                name="userId"
                                />
                                {errors.userId && (
                                    <HelperText>{errors?.userId?.message}</HelperText>
                                )}
                                {!errors.userId&&(
                                    <HelperText>{"가입한 이메일을 적어주세요."}</HelperText>
                                )}
                            </inputWapper>
                            <NavItem>
                                <Put>Push PW</Put>
                                <InputWrapper>
                                    <Input 
                                    type="password"
                                    tabIndex="2"
                                    className="input"
                                    {...register("password", {
                                        required: "비밀번호를 입력해주세요",
                                    })}
                                    aria-invalid={
                                        !isDirty ? undefined : errors.password ? "true" : "false"
                                    }
                                    name="password"
                                    />
                                    {errors.password && (
                                        <HelperText>{errors?.password?.message}</HelperText>
                                    )}
                                    {errors.password && (
                                        <HelperText>{"비밀번호를 입력해주세요"}</HelperText>
                                    )}
                                </InputWrapper>
                            </NavItem>
                        </Container>
                    </Box>
                </NavBar>
            </NavWapper>
           </>
}

export default LoginBox;

const NavWapper = styled.nav`
    margin-top:3rem;
    top: 50%;
    left:50%;
    display: flex;
    position: absolute;
    z-index: 5;
    transform: translate(-50%, -50%);
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavItem = styled.div`
    margin-top: 4rem;
`

const Box = styled.div`
    width: 30rem;
    margin-top: 1.5rem;
    height : 30rem;
    border-radius: 10px;
    background-Color: #373737;
`
const Container = styled.div`
    display: flex;
    flex-directuin:column;
    justifiy-content: flex-start;
    position: relative;
`

const Put = styled.div`
    text-align: center;
    font-family: Ink Free;
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: auto;
    width: 25rem;
    height: 5rem;
    cursor: pointer;
    background-Color: #FFFFFF;
`
const Text = styled.div`
    padding: auto;
    margin-top: 1rem;
    text-align: center;
    font-size: 3rem;
    font-family: Ink Free;
    height: 4.8rem;
    color: #FFFFFF;
`

const InputWrapper = styled.div`
    position: relative;
`

const Input = styled.div`
    position: relative;
` 

const HelperText = styled.div`
    margin-top: 0.3rem;
    font-size: 1.2rem;
    color: #cbcbcb;
`

