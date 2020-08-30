import React from "react";

import styled from "styled-components";

const Contact = styled.section`
    grid-area: contact;
    color: white;
    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 30vh;
        background-color: black;
    }
    ul {
        padding: 20px 0 0 0;
        list-style: none;
        text-align: center;
    }
    li {
        &:nth-child(2) {
            margin: 20px 0 0 0;
        }
    }
`;
function ContactPanel() {
    const n = 1;
    let view = [...Array(n)].map(() => (
        <div key={n}>
            <ul>
                <header>About</header>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <ul>
                <header>Companies</header>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <ul>
                <header>More</header>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </div>
    ));

    return <Contact>{view}</Contact>;
}

export default ContactPanel;
