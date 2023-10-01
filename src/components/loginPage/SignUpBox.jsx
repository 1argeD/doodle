import react from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form" 
import { useDispatch} from "react-redux";
import { userSignUp } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState : {isDirty,errors},
    } = useForm({mode : "onChange"})
    

    const onSubmit = () => {
        
        if(watch().password!=watch().passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
        }
        
        const body = {
            email : watch().userId,
            nickname : watch().nickname,
            password : watch().password,
            passwordConfirm : watch().passwordConfirm,
        }
        console.log(body);
        dispatch(userSignUp(body));
    }

    const onError = (errors) => {
        console.log(errors);
    }

    const onPath = () => {
        navigate("/login")
    }

    return <>
        <SignUpBox>
            <FormWapper>
                <From onSubmit={handleSubmit(onSubmit,onError)}>
                <New>SignUp</New>
                <Text>Email : </Text><input
                type = "text"
                tabIndex="2"
                className="input"
                {...register("userId",
                    require = "아이디를 확인해 주세요.",
                )}
                aria-invalid={
                    !isDirty ? undefined : errors.userId ? true : false
                }
                name = "userId"
                /><br/>
                <Text>NICK : </Text><input
                type = "text"
                tabIndex="2"
                className="input"
                {...register("nickname",
                    require = "비밀번호를 확인해 주세요.",
                )}
                aria-invalid={
                    !isDirty ? undefined : errors.nickname ? true : false
                }
                name = "nickname"
                /><br/>
                <Text>PW : </Text><input
                type = "text"
                tabIndex="2"
                className="input"
                {...register("password",
                    require = "비밀번호를 확인해 주세요.",
                )}
                aria-invalid={
                    !isDirty ? undefined : errors.password ? true : false
                }
                name = "password"
                /><br/>
                <Text>PWConfirm : </Text><input
                type = "text"
                tabIndex="2"
                className="input"
                {...register("passwordConfirm",
                    require = "비밀번호가 일치하지 않습니다.",
                )}
                aria-invalid={
                    !isDirty ? undefined : errors.passwordConfirm ? true : false
                }
                name = "passwordConfirm"
                /><br/>
                <button>가입완료</button><button onClick={handleSubmit(onPath)}>로그인페이지로</button>
                </From>
            </FormWapper>
          </SignUpBox>
    </>
    
}

export default SignUp

const SignUpBox = styled.div`
    margin : auto;
    margin-top : 30px;
    margin-bottom : 300px;
    background-color: #373737;
    width : 50vw;
    height : 50vw;     
    border-radius : 3vw;
`
const FormWapper = styled.div`
    margin-top : 1px;;
    margin-left : 10vw;
`

const From = styled.form`
    dispaly : flex;
` 
// const Email = styled.input`
//     witdh:10vw;
//     height:1vw;    
// `
// const ID = styled.input`
//     margin-left:1.5vw;
//     witdh:10vw;
//     height:1vw;
// `
// const PW = styled.input`
//     margin-left:16px;
//     witdh:10vw;
//     height:1vw;
// `
// const PWConform = styled.input`
//     witdh:10vw;
//     height:1vw;
// `
const Text = styled.text`
    font-family: Ink Free;
    font-style : bold;
    color: #FFFFFF;
`

const New = styled.div`
    font-size: 5rem;
    font-family: Ink Free;
    color: #FFFFFF;
`