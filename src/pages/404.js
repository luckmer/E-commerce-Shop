import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function IncorrectPage() {
    return (
        <Container>
            <Link to="/">
                <p>404 page not found</p>
            </Link>
        </Container>
    );
}

export default IncorrectPage;
