import styled from "styled-components";

export const NavBar = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ced4da;
    text-decoration: none;
`;
export const Header = styled.header`
    padding: 2vh 10vw 2vh 10vw;
    display: flex;
    justify-content: space-between;
    font-size: 24px;

    ul {
        padding: 0 2vw 0 2vw;
        margin: 1vh 0 1vh 0;
        list-style: none;
    }
    a {
        font-family: "Maragsa";
        text-decoration: none;
        font-weight: bold;
        color: ${({ scroll }) => (scroll ? "black" : "#17718d")};
    }
    li {
        margin: 5px 0 5px 0;
    }
    @media screen and (max-width: 850px) {
        padding: 7vh 2vw 7vh 3vw;
        font-size: 16px;
        position: fixed;
        transform: ${({ state }) =>
            state ? "translateY(0)" : "translateY(-100%)"};
        background-color: black;
        color: white;
        top: 0;
        right: 0;
        width: 100%;
        transition: transform 0.3s ease-in-out;
    }
`;
export const Menu = styled.div`
    display: none;
    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        width: 2rem;
        height: 3rem;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 999;

        div {
            background-color: ${({ state }) => (state ? "white" : " black")};
            width: 20px;
            height: 3px;
            transition: all 1s ease;
        }
    }
`;

export const DivPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    @media screen and(max-width : 850px) {
        display: none;
    }
`;
