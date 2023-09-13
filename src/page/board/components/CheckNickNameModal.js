import { styled } from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import JJOInput from "../../../components/Input";
import JJOButton from "../../../components/Button";
import { useTodo } from "../../../context/context";

const CheckNicknameModal = ({nickName})=>{

    // const onSameNickName = (e) =>{
    //     if(e.target.value === nickName){
    //         return alert("안녕")
    //     }
    // }


    const { setIsYourName, setIsAddModal, userNickName } = useTodo();
    
    const onCloseYourName =()=>{
        setIsYourName(false)
    }

    console.log(userNickName)

    const onSubmit = (e) =>{
        
        e.preventDefault();
        const nickChecker = e.target.Nick.value;
        if(nickChecker===userNickName){
            setIsYourName(false);
            setIsAddModal(true);
            alert("확인되었습니다!")
        }else{
            alert("닉네임을 확인해줘요")
        }
        console.log(nickName, nickChecker)
    }
    
    return (
        <>
            <Wrap>
                <Form onSubmit={onSubmit}>
                    <JJOButton onClick={onCloseYourName} className={"close"}>X</JJOButton>
                    <JJOInput type={"text"} placeholder={"닉네임을 입력해주세요"} name={"Nick"}></JJOInput>
                    <JJOButton>Submit</JJOButton>
                </Form>
            </Wrap>
        </>
    )
}

export default CheckNicknameModal;

const Wrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    ${flexCenter}
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    
`

const Form = styled.form`
    width: 280px;
    height: 140px;
    position: absolute;
    background-color: white;
    border: 5px solid black;
    border-radius: 20px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${flexCenter}
    flex-direction: column;


    & > input{
        border: 2px solid black;
        width: 200px;
        height: 30px;
        border-radius: 6px;
        text-align: center;
    }

    button:nth-child(1){
        position: absolute;
        right: 6px;
        top: 5px
    }

    button{
        &:last-child{
            margin-top: 15px;
            font-weight: 600;
            width: 60px;
            border-radius:2px;

            &:hover{
                transition: all 0.6s;
            }
        }
    }

`

