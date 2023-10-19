import styled from "styled-components";

export const SCErrorPage = styled.div`
    height: 100vh;
    text-align: center;
    color: rgb(255, 0, 0);
    background-image: url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backface-visibility: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`
export const SCErrorBtn = styled.button`
    padding: 15px 20px;
    background-color: red;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border: none;
    :hover{
        cursor: pointer;
    }
`