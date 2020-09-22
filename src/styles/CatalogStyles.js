import styled, { keyframes } from "styled-components";
import colors from "./colors";
export const Container = styled.div`
    padding: 15vh 0 0 0;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " . .  controlPanel controlPanel controlPanel . . "
        " . context  context  context context  context . "
        " . context  context  context context context .  "
        "page page page page page page page "
        "contact contact contact contact contact contact contact";
`;
const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const Incorrect = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
    transform: translate(-50%, -50%);
    animation: ${rotate} 2s linear infinite;
    div {
        border: 12px solid white;
        border-top: 12px solid ${colors.lightBlue};
        border-radius: 50%;
        width: 66px;
        height: 66px;
    }
`;

export const SearchControl = styled.div`
    grid-area: controlPanel;
    opacity: ${({ page }) => (page === 2 ? 0 : 1)};
    display: flex;
    justify-content: center;
    align-items: center;
    input,
    select {
        &:first-child {
            border: 1px solid black;
        }
        padding: 10px 10px 10px 10px;
        border-radius: 5px;
        width: 100%;
    }
    @media (max-width: 850px) {
        input,
        selecT {
            padding: 10px 10px 10px 10px;

            border-radius: 5px;
            width: 100%;
        }
        flex-direction: column;
    }
`;
export const DivHide = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Hide = styled.div`
    width: 100%;
    height: 100%;
    button {
        margin: 2vh 2vh 2vh 2vw;
        background-color: ${colors.DarkColor};
        color: white;
        width: 10em;
        height: 3em;
        border-radius: 3px;
        font-weight: bold;
        opacity: 0;
    }
    &:hover {
        background-color: ${colors.DarkColor};
        img {
            opacity: 0.5;
        }
        button {
            opacity: 1;
        }
    }
`;
export const Context = styled.div`
    grid-area: context;
    padding: 2px 2px 2px;
    width: 100%;
    height: 100%;
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
    background-color: ${colors.white};
    img {
        border-radius: 5px;
        max-width: 400px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
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
    }
`;
export const FilterPanel = styled.div`
    grid-area: controlPanel;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    input {
        width: 100%;
        border-radius: 2px;
        padding: 10px;
        text-align: left;
        border: 0.5px solid black;
    }
`;
export const Page = styled.div`
    grid-area: page;
`;
