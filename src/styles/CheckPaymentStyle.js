import styled from "styled-components";

export const Container = styled.div`
    padding: 15vh 10vw 0 10vw;
    div {
        padding: 0;
        width: 100%;
    }
`;
export const Context = styled.div`
    @media (min-width: 1000px) {
        display: flex;
    }
`;
export const CompleteButton = styled.div`
    margin: 30px 0 30px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1000px) {
        button {
            border-radius: 100px;
            padding: 1em 10em 1em 10em;
            background-color: #1d65c1;
            color: #fff;
        }
    }
    @media (max-width: 1000px) {
        button {
            border-radius: 100px;
            padding: 10px 20px 10px 20px;
            background-color: #1d65c1;
            color: #fff;
        }
    }
`;
