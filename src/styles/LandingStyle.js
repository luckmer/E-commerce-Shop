import styled from "styled-components";

export const Container = styled.section`
    padding: 15vh 5vw 2vh 5vw;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    img {
        border-radius: 5px;
        max-width: 400px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
        transition: transform 0.5s;
        &:hover {
            transform: scale(1.1);
        }
    }
    @media (max-width: 850px) {
        img {
        border-radius: 5px;
        max-width: 300px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
    }
`;
