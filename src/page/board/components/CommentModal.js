import { styled } from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import JJOButton from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import OneComment from "./OneComment";
import { useTodo } from "../../../context/context";
import { faker } from "@faker-js/faker";
import shortId from "shortid";


const CommentModal = ({setIsComment, Comments, id})=>{

    

    const { post, setPost } = useTodo();

    const onCloseComment =()=>{
        setIsComment(false)
    }

    const getPost = post.find((el)=> el.id === id)

    const onAddComment = (e)=>{
        e.preventDefault();
        const content = e.target.comment.value;
        
        const newComment = {
            id:shortId.generate(),
            content,
            User: {
                id: shortId.generate(),
                nickName: faker.person.firstName(),
                profileImg: faker.image.url(),
              },
            myComment: true,
        }

        const updatePost = {
            ...getPost,
            Comments:[
                newComment,
                ...getPost.Comments    
            ]
        };

        const newUpdatePost = post.map((el) => el.id === id ? updatePost : el)
        setPost(newUpdatePost)

    }



    return (
        <Wrap>
            <Form onSubmit={onAddComment}>
                <ButtonWrap>
                <JJOButton onClick={onCloseComment}>X</JJOButton>
                </ButtonWrap>
                <Comment>
                    {Comments.map((el)=><OneComment key={el.index} comments={Comments} nickName={el.User.nickName} content={el.content}></OneComment>)}
                </Comment>
                <CommentBox>
                    <textarea name="comment"></textarea>
                    <JJOButton><FontAwesomeIcon icon={faPaperPlane} /></JJOButton>
                </CommentBox>
            </Form>
        </Wrap>
    )
}

export default CommentModal;

const ButtonWrap = styled.div`
    position: sticky;
    right: 5px;
    top: 0;
`

const Wrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    ${flexCenter}
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1000;
    
`

const Form = styled.form`
    
    position: absolute;
    bottom: 40px;
    width: 22%;
    height: 60%;
    background-color: white;
    border: 3px solid gray;
    border-radius: 10px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    button{
        margin: 5px;
        float: right;
    }
`

const Comment = styled.div`
    padding: 24px 24px 55px 24px;
`

const CommentBox = styled.div`
    background-color: white;
    position: sticky;
    bottom:0;
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-evenly;

    & > textarea{
        
        resize: none;
        width: 75%;
        border-radius: 50px;
        text-align: center;
        padding: 2px;
        align-items: center;
        font-size: 14px;
        height: 20px;
    }
`