import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { userLogin } from "../redux/user/userAction";

function LoginBox() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const success = useSelector((state) => state);


    //메소드 가져오기
    const {
        register,//폼들의 유효성을 확인
        handleSubmit,//품을 제출하기 위한 함수
        watch,//실시간으로 입력폼에 적힌 값을 확인하는 옵션(event가 일어날때마다 값을 확인))
        formState: {isDirty, errors}, //해당 폼에서 일어난 에러와 제출 여부 값의 유효성등 세부적인 상태를 확인
    }  = useForm({ mode : "onChage" });//react-hook-from에서 다루는 메인 함수임과 동시에 mode를 설정해 줄 수 있다.'onchage'를 입력하면 실시간 오류 메세지를 출력해 줄 수 있다.

    const onSubmit= () => {
        const body = {
            email : watch().userId,
            password: watch().password,
        };
        dispatch(userLogin(body));
    };

    const onError = (error) => {
        console.log(error); 
    }

    useEffect(() => {
        if(success) {
            navigate("/login");
        }
    }, [success, navigate]);

    return(
        <FormWarapper>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <New>Login</New>
            <Text>ID : </Text>
            <InputWrapper>
            <input
           type = "text" 
           tabIndex="2"
           className="input"
           {...register("userId", {
               require: "가입한 이메일을 적어주세요.",
           })} 
           aria-invalid={
               !isDirty ? undefined : errors.userId ? "true" : "false"
           }
           name = "userId"
            />
            </InputWrapper>
            <InputWrapper>
            <Text>PW : </Text><input 
            type = "password" 
            tabIndex="2"
            className="input"
            {...register("password", {
                require: "비밀번호를 입력해주세요.",
            })} 
            aria-invalid={
                !isDirty ? undefined : errors.password ? "true" : "false"
            }
            name = "password"
            />
            </InputWrapper>
            <button>로그인</button>
            </Form>
            <button>회원가입</button>
        </FormWarapper>
    ); 
};


export default LoginBox;

const FormWarapper = styled.div`
    width : 100px;
    height : 50px;
`

const InputWrapper = styled.div`
    display : flex;
`
const Text = styled.text`
    font-family: Ink Free;
    font-style : bold;
    color: #FFFFFF;
`

const Form = styled.form`
    display : flex;
    flex-direction: column;
`

const New = styled.h1`
    margin-top : 5vw;
    padding : auto;
    font-family: Ink Free;
    color: #FFFFFF;
`