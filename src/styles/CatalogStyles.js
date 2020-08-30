import styled from "styled-components";

export const Container = styled.div`
    padding: 15vh 0 0 0;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " controlPanel controlPanel  context context context context . "
        " controlPanel controlPanel  context  context context  context . "
        " controlPanel controlPanel  context  context context context .  "
        "page page page page page page page "
        "contact contact contact contact contact contact contact";
`;
export const Context = styled.div`
    padding: 2px 2px 2px;
    width: 100%;
    height: 100%;
    grid-area: context;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
export const Card = styled.div`
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    img {
        border-radius: 5px;
        max-width: 400px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
    }
`;
export const FilterPanel = styled.div`
    width: 100%;
    height: 100vh;
    grid-area: controlPanel;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    input {
        width: 100%;
        border-radius: 2px;
        padding: 10px;
        text-align: left;
        border: 0.5px solid black;
        background-color: #;
    }
`;
export const Page = styled.div`
    grid-area: page;
`;
