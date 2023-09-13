import { useState } from "react";
import styled, { css } from "styled-components";

//total(데이터 총 갯수) , Limit (한 페이지에 보여줄 갯수)
const Pagination = ({ total, limit, page, setPage }) => {
    const [btnActive, setBtnActive] = useState(0); // 현재 페이지 활성화 여부 const numPages = Math. ceil(total / limit); // 총 페이지 수는 올림해야 함
    const numPages = Math.ceil(total/ limit); // 총페이지 올림

    const handlePageBtn = (e, i) => {
        setPage(i + 1);
        setBtnActive(e.target.value);
        console.log(i+1, e.target.value)
    };

    const handlePointerMinus = () =>{
        setPage (page - 1)
        setBtnActive(btnActive-1);
    }

    const handlePointerPlus = () =>{
        setPage (page + 1)
        setBtnActive(btnActive+1);
    }

return (<>
    <PageWrap>
        <PageBtn onClick={() => handlePointerMinus()} disabled={page === 1}>
        &lt;
        </PageBtn>
        {Array(numPages)
        .fill()
        .map((_, i) => (
        <PageBtn
            value={i}
            key={i + 1}
            className={i == btnActive ? "active" : ""} 
            onClick={(e) => handlePageBtn(e, i)} 
            aria-current={page === i + 1 ? "page" : null}>
            {i + 1}
        </PageBtn>
        ))}
        <PageBtn onClick={() => handlePointerPlus()} disabled={page === numPages}> 
        &gt;
        </PageBtn>
        </PageWrap>
        </>
        )
}
export default Pagination;

const PageWrap = styled.div`
    display: flex;
    justify-content: center;
`

const PageBtn = styled.button`
    border: none;
    background-color: white;
    margin: 0 4px;
    border-radius: 50%;
    width: 26px;
    height: 26px;

    &.active{
        color: red;
        font-weight: bolder;
    }

    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0, 0.1);
        font-weight: bold;
    }
`
