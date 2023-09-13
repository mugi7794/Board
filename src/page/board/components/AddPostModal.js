import { styled } from "styled-components";
import JJOInput from "../../../components/Input";
import JJOButton from "../../../components/Button";
import { useTodo } from "../../../context/context";
import { flexCenter } from "../../../styles/common.style";

const AddPostModal = ({nickName, profileImg}) =>{

    const { setIsAddModal, onAddPost, userNickName } = useTodo();

    const onCloseAddModal = (e) =>{
        e.preventDefault()
        if(window.confirm("정말 글쓰기를 안할거에요?")) {
            alert("안할래요")
            setIsAddModal(false);
        } else {
            alert("더 생각해볼게요")
        }
    };

    const onSubmitPost = (e) =>{
        e.preventDefault()
        const { title, content } = e.target;
        console.log(title.value, content.value)
        setIsAddModal(false);
        onAddPost(title.value, content.value, userNickName, profileImg)
        //setIsAddModal(false);
    }



    return (
        <Wrap>
            <Form onSubmit={onSubmitPost}>
                <JJOButton onClick={onCloseAddModal}>X</JJOButton>
                <JJOInput label={"Title"} name={"title"}></JJOInput>
                <p>Content</p>
                <textarea name={"content"}></textarea>
                <JJOButton>글쓰기</JJOButton>
            </Form>
        </Wrap>
    )
}

export default AddPostModal;

const Wrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    ${flexCenter}
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    
`

const Form = styled.form`
    width: 300px;
    height: 300px;
    ${flexCenter}
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    flex-direction: column;
    position: relative;

    input{
        width: 80%;
        margin: 12px;
    }

    textarea {
    width: 80%;
    height: 6.25em;
    resize: none;
    margin: 12px;
    }

    button:nth-child(1){
        position: absolute;
        top: 5px;
        right: 5px;
    }

    button{
        width: 50px;
        transition: 0.6s;
    }
`