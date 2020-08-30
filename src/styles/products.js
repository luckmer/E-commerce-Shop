import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " carousel carousel carousel carousel carousel carousel carousel"
        " . . . . . . ."
        " . shoes shoes shoes shoes shoes ."
        " slider slider slider slider slider slider slider"
        " contact contact contact contact contact contact contact";
`;

export const Section = styled.section`
    grid-area: carousel;
    .carousel-inner > .item > img {
        width: 240px;
        height: 1px;
    }
    .carousel-inner {
        width: 100%;
        height: 100vh !important;
    }
`;
export const Shoes = styled.section`
    grid-area: shoes;
    padding: 10vh 1vw 2vh 1vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    flex: 1.36;
    div {
        padding: 20px;
        width: 20vw;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    img {
        border-radius: 5px;
        max-width: 400px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
    }
`;
