import styled from "styled-components";

export const Container = styled.div`
    padding: 15vh 5vw 2vh 5vw;
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-rows: auto;
    grid-template-areas:
        ". . . . . . . "
        " img1 img1  img1 img3 img3 img2 img4"
        " img1 img1 img1  img3 img3 img2 img4"
        ". . . . . . . ";
`;
export const ImgPanel = styled.div`
    &:nth-child(1) {
        grid-area: img1;
    }
    &:nth-child(2) {
        grid-area: img3;
    }
    &:nth-child(3) {
        grid-area: img2;
    }
    &:nth-child(4) {
        grid-area: img3;
    }
    &:nth-child(12) {
        grid-area: img4;
    }
    &:nth-child(13),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11),
    &:nth-child(14),
    &:nth-child(15),
    &:nth-child(16) {
        display: none;
    }
    img {
        box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        transition: transform 0.5s;
        width: 100%;
        &:hover {
            transform: scale(1.1);
        }
    }
`;
