import styled from "styled-components";
export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
export const Card = styled.div`
    padding: 20px;
    width: 20vw;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    img {
        border-radius: 2px;
        width: 100%;
        flex: 2;
    }
`;
export const Slider = styled.section`
    grid-area: slider;
    padding: 10vh 1vw 2vh 1vw;
    header {
        margin: 2vh 0 2vh 0;
        display: flex;
        justify-content: center;
        font-size: 3vw;
    }
`;
