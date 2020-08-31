import React from "react";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        padding: 5px 5px 5px 5px;
    }
    button {
        background-color: #212529;
        color: white;
        padding: 0.5vh 1vw 0.5vh 1vw;
        border-radius: 5px;
        margin: 20px 3px 20px 3px;
    }
    @media screen and (max-width: 850px) {
        button {
            padding: 5px 20px 5px 20px;
        }
    }
`;
function Paginating({ paginate, LimitControl, totalPosts }) {
    const pageNumbers = [];
    const PageLength = Math.ceil(totalPosts / LimitControl);
    for (let i = 1; i <= PageLength; i++) {
        pageNumbers.push(i);
    }
    return (
        <Container>
            {pageNumbers.map((number) => (
                <div onClick={() => paginate(number)} key={number}>
                    <button>{number}</button>
                </div>
            ))}
        </Container>
    );
}

export default Paginating;
