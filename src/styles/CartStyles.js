import styled from "styled-components";

export const ContextContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    img {
        border-radius: 5px;
        max-width: 500px;
        min-width: 290px;
        height: 300px;
        display: block;
        object-fit: cover;
    }
`;
export const Box = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    button {
        background-color: #212529;
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
    justify-content: space-between;
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
            background-color: #212529;
            color: white;
        }
    }
`;
export const ScrollPanel = styled.div`
    overflow-y: scroll;
    height: 60vh;
`;
export const ShopHeader = styled.div`
    display: flex;
    justify-content: space-around;
    p {
        font-weight: bold;
    }
`;
