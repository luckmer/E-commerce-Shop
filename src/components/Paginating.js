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
`;
function Paginating({ paginate, LimitControl, totalPosts }) {
    const pageNumbers = [];
    const Test = Math.ceil(totalPosts / LimitControl);
    for (let i = 1; i <= Test; i++) {
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
