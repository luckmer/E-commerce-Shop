import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    h1,
    h4,
    h4 {
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid black;
    }
`;
export const Button = styled.button`
    border-radius: 100px;
    padding: 5px 50px 5px 50px;
    font-weight: bold;
`;
