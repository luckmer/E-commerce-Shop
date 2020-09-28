import styled from "styled-components";
import colors from "./colors";

export const ContextContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    img {
        border-radius: 5px;
        max-width: 300px;
        min-width: 290px;
        height: 300px;
        display: block;
        object-fit: cover;
    }
`;
export const Information = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        opacity: 0.3;
    }
    h5 {
        color: ${colors.DarkColor};
        opacity: 0.6;
        margin: 2vh 0 2vh 0;
    }
    button {
        margin: 2vh 0 2vh 0;
        background-color: ${colors.DarkColor};
        color: white;
        width: 10vw;
        height: 5vh;
        border-radius: 3px;
        font-weight: bold;
    }
`;
export const Div = styled.div`
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2vw;
    height: 4vh;
`;
export const Box = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    button {
        background-color: ${colors.DarkColor};
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 3px;
        font-weight: bold;
    }
    span {
        padding: 0 10px 0 10px;
        font-weight: bold;
    }
`;
export const Row = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;
export const Container = styled.div`
    padding: 15vh 2vw 2vh 2vw;
`;
export const Section = styled.section`
    padding: 50px 0 0 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
        background: none;
        font-weight: bold;
        padding: 1vh 3vw 1vh 3vw;
        border-radius: 5px;
        &:nth-child(2) {
            background-color: ${colors.DarkColor};
            color: white;
        }
    }
`;
export const ScrollPanel = styled.div`
    overflow-y: scroll;
    height: 63vh;
`;
export const ShopHeader = styled.div`
    display: flex;
    justify-content: space-around;
    p {
        font-weight: bold;
    }
`;
