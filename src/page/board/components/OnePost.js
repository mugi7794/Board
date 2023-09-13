import styled from "styled-components"
import { flexCenter } from "../../../styles/common.style"
import JJOButton from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import { useTodo } from "../../../context/context";
import CheckNicknameModal from "./CheckNickNameModal";
import AddPostModal from "./AddPostModal";
import CommentModal from "./CommentModal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const OnePost = ({post})=>{


    const [ likeHeart, setLikeHeart] = useState(false);
    const [ likeNumber, setLikeNumber] = useState(false);
    const [ isEditPost, setIsEditPost] = useState(true);
    const [ isComment, setIsComment] = useState(false);
    
    
    const { isYourName, setIsYourName, isAddModal, setIsAddModal, setUserNickName, onDeletePost, onUpdatePost } = useTodo();

    const like = useRef(0);

    const onClickLike = ()=>{
        like.current++;
        setLikeNumber((prev)=> !prev);
        setLikeHeart(true);
    }


    const onCheckName = () =>{
        setIsYourName(true);
        setUserNickName(post.User.nickName);
    }

    const onDeleteButton =() =>{
        const deleteId = post.id;
        if(window.confirm("정말 삭제하시겠습니까?")){
            onDeletePost(deleteId)
            alert("삭제되었습니다.")
        }
    }

    const refTitle = useRef("");
    const refContent = useRef("");


    const onUpdateButton = () =>{
        if(isEditPost){
            setIsEditPost(false);
        }else{
            setIsEditPost(true);
            onUpdatePost(post.id, refTitle.current.value, refContent.current.value)
        }
    }

    const onCommentButton = ()=>{
        setIsComment(true);
    }

    const renderSlides = post.Post_img.map(image => (
        <div key={image.alt}>
          <img src={image} alt={image.alt} />
      </div>
    ));

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }

    return (
        <>
        <Wrap>
        {isComment && (<CommentModal setIsComment={setIsComment} Comments={post.Comments} id={post.id}></CommentModal>)}
            <Body>
                {isYourName && (<CheckNicknameModal></CheckNicknameModal>)}
                {isAddModal && (<AddPostModal profileImg={post.User.profileImg}></AddPostModal>)}
                
                <Header>
                <img src={post.User.profileImg}></img>
                <div>
                {post.User.nickName}
                    <div>
                        <JJOButton onClick={onUpdateButton}><FontAwesomeIcon icon={faPen} size="lg"></FontAwesomeIcon></JJOButton>
                        <JJOButton onClick={onDeleteButton}><FontAwesomeIcon icon={faBan} size="lg"></FontAwesomeIcon></JJOButton>
                        <JJOButton onClick={onCheckName}><FontAwesomeIcon icon={faPlus} size="xl"/></JJOButton>
                    </div>
                </div>
                </Header>
                <Content>
                    <div>
                    <Carousel
                      showArrows={true}
                      autoPlay={true}
                      infiniteLoop={true}
                      showThumbs={false}
                      selectedItem={post.Post_img[currentIndex]}
                      onChange={handleChange}
                      className="w-[400px] lg:hidden">
                      {renderSlides}
                    </Carousel>
                    </div>
                    
                    
                    <div>
                    <Button onClick={onClickLike}>
                    {likeHeart ? <FontAwesomeIcon icon={faHeart} size="2xl" style={{color:"red"}}/>: <FontAwesomeIcon icon={faHeart} size="2xl" />}
                    
                    </Button>
                    <Button>
                    <FontAwesomeIcon icon={faComment} size="2xl" onClick={onCommentButton}/>
                    </Button>
                    <h5>좋아요 {like.current}개</h5>
                    </div>
                    {isEditPost ? <div>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                    </div> 
                    :
                    <UpdateBox>
                        <input placeholder="title" ref={refTitle}></input>
                        <textarea placeholder="content" ref={refContent}></textarea>
                    </UpdateBox>}
                    
                    
                    <span>{post.createdAt.toString()}</span>
                </Content>
                    
            </Body>
        </Wrap>
        </>
    )
}

export default OnePost;

const UpdateBox = styled.div`
    display: flex;
    flex-direction: column;
    
    & > input {
        margin: 7px 0;
        height: 20px;
    }

    & > textarea{
        resize: none;
        margin: 7px 0;
        height: 150px;
    }
`

const Wrap = styled.div`
    width: 100%;
    ${flexCenter}

    * {
        margin: 0;
        padding: 0;
    }
`

const Body = styled.div`
    width: 23%;
    height: calc(100vh - 50px);
    ${flexCenter}
    border: 4px solid black;
    border-radius: 30px;
    margin: 10px;
    position: relative;
`
const Header = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    display: inline-flex;

    & > img{
        width: 23%;
        height: 100%;
        border-radius: 50%;
    }

    & > div {
        width: 100%;
        ${flexCenter}
        font-size: 24px;
        justify-content: space-around;
    }
`

const Content = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    

    & > img{
        width: 100%;
    }

    & > div{
        padding-left: 12px;
        padding-right: 12px;

        &> h4 {
            padding-top: 12px;
            padding-bottom: 12px;
        }
    }

    & > span{
        position: absolute;
        bottom: 15px;
        left: 15px;
        font-size: 6px;
    }
`
const Button = styled.button`
    width: 20px;
    height: 20px;
    background-color: white;
    cursor: pointer;
    border: none;
    margin: 15px 20px 15px 0;
`