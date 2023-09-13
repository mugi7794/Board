import { createContext, useContext, useState } from "react";
import { MockPosts } from "../__mock__/mockPost";
import { faker } from "@faker-js/faker";
import shortId from "shortid";

const UserContext = createContext();
export const useTodo = () => useContext(UserContext);


const UserProvider = ({ children }) =>{

    const [post, setPost] = useState(MockPosts(10));

    // 닉네임 확인 모달
    const [ isYourName, setIsYourName] = useState(false);
    const [ userNickName, setUserNickName] = useState(""); 
    const [ isAddModal, setIsAddModal] = useState(false);

    const onAddPost = (title, content, nickName, profileImg)=>{

        setPost((prev)=>[
            {
                id: shortId.generate(),
                title,
                content,
                User: {
                    id: shortId.generate(),
                    nickName,
                    profileImg,
                },
                Post_img: Array(Math.floor(Math.random() * 3) + 1)
                .fill()
                .map(() => faker.image.url()),
                createdAt: faker.date.between(
                    "2023-01-01T00:00:00.000Z",
                    "2023-01-31T00:00:00.000Z"
                ),
            },
            ...prev
        ])
    }

    const onUpdatePost = (id, title, content)=>{
        const _post = [...post];
        const updatePost = _post.find((el)=> el.id === id)
        updatePost.title = title;
        updatePost.content = content;
        setPost(_post);
    }

    const onDeletePost = (e)=>{
        const deletedTodo = post.filter((el)=> el.id !== e);
        setPost(deletedTodo);
    }

    return <UserContext.Provider value={{post, setPost, onAddPost, isYourName, setIsYourName, isAddModal, setIsAddModal, userNickName,
        onUpdatePost, setUserNickName, onDeletePost}}>{ children }</UserContext.Provider>
}

export default UserProvider;