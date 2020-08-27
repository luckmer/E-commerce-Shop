import styled from "styled-components";

export const Container = styled.div`
    padding: 15vh 5vw 2vh 5vw;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        ".  .  . . .  . ."
        ". img img . context context  . "
        ". img  img .  context context .  "
        ". .  . . .  . .";
`;
export const IMG = styled.div`
    flex: 2;
    grid-area: img;
    img {
        width: 100%;
    }
`;
export const ContextView = styled.section`
    grid-area: context;
    height: 100%;
`;
export const Div = styled.div`
    display: flex;
    height: 40%;
    justify-content: center;
    align-items: flex-end;
    button {
        &:nth-child(1) {
            padding: 1vh 2vw 1vh 2vw;
        }
        margin: 20px;
        border-radius: 5px;
        background-color: #212529;
        color: #f8f9fa;
        padding: 1vh 5vw 1vh 5vw;
    }
`;
