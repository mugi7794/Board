import { useTodo } from "../../context/context";
import OnePost from "./components/OnePost";
import Pagination from "../../components/Pagination";
import { useState } from "react";


const BoardPage = () =>{

    const { post } = useTodo();

    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const offset = (page-1) * limit; //데이터 시작 번호

    return (
        <>
            {post.slice(offset, offset + limit).map((post)=>(<OnePost post={post} key={post.id}></OnePost>))}
            <div> 
            <Pagination total={post.length} limit={1} page={page} setPage={setPage}/>
            </div>
        </>
    )
}

export default BoardPage;


