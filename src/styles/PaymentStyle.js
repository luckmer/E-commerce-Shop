import styled from "styled-components";

export const ContainerContext = styled.div`
    padding: 15vh 0 0 0;
`;

export const FormContext = styled.div`
    margin: 0 40px 0 40px;
    button {
        border-radius: 10px;
        padding: 10px 20px 10px 20px;
        background-color: #1d65c1;
        color: #fff;
    }
    form,
    div {
        padding: 0;
        width: 100%;
    }
    @media (min-width: 1000px) {
        button {
            border-radius: 10px;
            padding: 1em 5em 1em 5em;
            background-color: #1d65c1;
            color: #fff;
        }
        margin: 0 20em 0 20em;
        display: flex;
    }
    input {
        width: 100%;
    }
`;

export const ButtonPanel = styled.div`
    display: flex;
    justify-content: center;
`;
