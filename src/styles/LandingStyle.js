import styled from "styled-components";

export const Container = styled.section`
    padding: 15vh 5vw 2vh 5vw;
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    grid-template-rows: auto;
    grid-template-areas:
        ". . . . . . . "
        " img1 img1  img1 img3 img3 img2 img4"
        " img1 img1 img1  img3 img3 img2 img4"
        ". . . . . . . ";
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
export const ImgOne = styled.div`
    grid-area: img1;
`;
export const ImgTwo = styled.div`
    grid-area: img2;
`;
export const ImgThree = styled.div`
    grid-area: img3;
`;
export const ImgFour = styled.div`
    grid-area: img4;
`;
