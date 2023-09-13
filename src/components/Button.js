import { styled } from "styled-components";

const JJOButton = ({children, onClick, type})=>{
    return <Button onClick={onClick} type={type}>{children}</Button>
}

export default JJOButton;

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    border: none;
    cursor: pointer;
    margin-right: 8px;

    &:hover{
        background-color: lightgray;
    }
`