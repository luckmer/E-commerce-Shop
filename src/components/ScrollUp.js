import React, { useState } from "react";
import styled from "styled-components";
const Back = styled.div`
    z-index: 9999;
    position: fixed;
    left: 91%;
    top: 80%;
    button {
        background-color: #dee2e6;
        color: #212529;
        border-radius: 5px;
        padding: 10px;
    }
    @media screen and (max-width: 850px) {
        z-index: 9999;
        position: fixed;
        left: 76%;
        top: 80%;
    }
`;

function ScrollUp() {
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", () => {
        window.pageYOffset > 1000 ? setScroll(true) : setScroll("");
    });

    return (
        <Back style={{ display: scroll ? "block" : "none" }}>
            <button onClick={handleClick}>Up</button>
        </Back>
    );
}

export default ScrollUp;
