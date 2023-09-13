import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JJOButton from "../../../components/Button";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useTodo } from "../../../context/context";
import { useRef, useState } from "react";

const OneComment = ({comments, nickName, content}) =>{

    const { post, setPost } = useTodo();
    const _post = [...post];
    const updatePost = _post.find((el)=>el.Comments === comments);
    const [ isCommentText, setIsCommentText] = useState(false);

    const commentRef = useRef();

    const onUpdateButton = ()=>{
        setIsCommentText((prev)=> !prev)
        
        if(isCommentText){
            const findPost = _post.find((el)=> el.Comments = comments)
            const findComment = findPost.Comments.find((el)=> el.content === content)
            findComment.content = commentRef.current.value;
            setPost(_post)
        }
    }

    const onDeleteButton = () =>{
        const deleteComment = comments.filter((el)=> el.content !== content);
        updatePost.Comments = deleteComment;
        setPost(_post);
    }

    return (<>
    <Wrap>
        <Comment><p>{nickName}
        <JJOButton type={"button"} onClick={onDeleteButton}><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></JJOButton>
        <JJOButton type={"button"} onClick={onUpdateButton}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></JJOButton>
        </p>
        { isCommentText ? <textarea defaultValue={content} ref={commentRef}></textarea> : <p>{content}</p>}
        </Comment>
    </Wrap>
    </>)
}

export default OneComment;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Comment = styled.div`
    width: 90%;
    border-bottom: 1px solid black;
    padding-bottom: 2px;

    button{
        margin: 0;
    }

    & > textarea{
        resize: none;
        padding: 5px;
        width: 92%;
        overflow-wrap: break-word;
        word-break: break-all;
        white-space: pre-wrap;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }

    & > p:nth-child(1) {
        margin-bottom: 2px;
        font-weight: bolder;
    }


`
