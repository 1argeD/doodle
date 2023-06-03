import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { __userLogin } from '../redux/user/userSlice';


const LoginBox = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //watch는 입력값 확인용이므로 추후 삭제
    const { watch, register, handleSubmit, formState:{errors} } = useForm();

    // const isLogin = useSelector((state) => state.user.isLogin);>
    
    const onSubmit = (payload) =>{
        dispatch(__userLogin(payload))
        navigate ('/');
    };


    return (
        <>
            <LoginForm>
                <InputArea onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input 
                        type="text" 
                        id="email"
                        name="email" 
                        placeholder='이메일을 입력해주세요.'
                        {...register("email",
                        {required: "이메일은 필수입니다.", 
                        pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{5,20}$/,
                        })}//숫자0-9영어대소a-z특문-_. @ 숫자0-9영어대소a-z특문-_. . 영문대소a-z
                        />
                        {errors.email && errors.email.type === "pattern" && <p> 이메일 형식을 입력해주세요. </p>}
                        
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder='비밀번호를 입력해주세요.'
                        {...register("password", 
                        {required: "비밀번호는 필수입니다.", 
                        pattern:/(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{6,12}$/ 
                        })}// {최소글자수,최대글자수} 비밀번호 정규식(검색)
                        />
                        {errors.password && errors.password.type === "pattern" && <p> 비밀번호 형식(영문,숫자,특수문자 6~12자)을 맞춰주세요. </p>}
                    </div>
                    
                    <button type='submit'>로그인</button>
                </InputArea>
            </LoginForm>
        </>
    );
};

export default LoginBox;



const LoginForm = styled.div`
    /* background-color: #FFEB33;
    box-shadow: 0px 0px 3px #ACADB1;
    padding: 100px;
    padding-bottom: 300px; */
    
`;

const Logo = styled.img`
    width: 250px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
`;

const InputArea = styled.form`
    >div>input {
        font-size: large;
        width: 350px;
        height: 50px;
        display: block;
        border: none;
        margin-top: 10px;
        margin-bottom: 5px;
        border-radius: 1px;
        box-shadow: 0px 0px 3px #ACADB1;
    }
    >button {
        font-size: large;
        color: #ACADB1;
        width: 354px;
        height: 50px;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        box-shadow: -0.5px -0.5px 4px #ACADB1;
        &:hover{
            color: gray;
            box-shadow: 0px 0px 4px #646464;
        }
    }
`;