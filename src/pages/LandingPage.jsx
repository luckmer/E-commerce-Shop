import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../styles/LandingStyle";

function LandingPage() {
    const state = useSelector(state => state.Context.fetchData)
    const Mapping = state.map(({src})=>src)

    return (
        <Container>
            <div>
                <Link to="/products">
                    <img src={Mapping[0]} alt={Mapping[0]} />
                </Link>
            </div>
            <div>
                <Link to="/products">
                    <img src={Mapping[9]} alt={Mapping[2]} />
                </Link>
            </div>
            <div>
                <Link to="/products">
                    <img src={Mapping[3]} alt={Mapping[3]} />
                </Link>
            </div>
            <div>
                <Link to="/products">
                    <img src={Mapping[11]} alt={Mapping[11]} />
                </Link>
            </div>
        </Container>
    );
}

export default LandingPage;
