import React, { useContext } from "react";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import {
    Container,
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
} from "../styles/LandingStyle";
function LandingPage() {
    const { fetchData } = useContext(DataContext);
    const Mapping = fetchData.map(({ src }) => src);

    return (
        <Container>
            <ImgOne>
                <Link to="/products">
                    <img src={Mapping[0]} alt={Mapping[0]} />
                </Link>
            </ImgOne>
            <ImgTwo>
                <Link to="/products">
                    <img src={Mapping[2]} alt={Mapping[2]} />
                </Link>
            </ImgTwo>
            <ImgThree>
                <Link to="/products">
                    <img src={Mapping[3]} alt={Mapping[3]} />
                </Link>
            </ImgThree>
            <ImgFour>
                <Link to="/products">
                    <img src={Mapping[11]} alt={Mapping[11]} />
                </Link>
            </ImgFour>
        </Container>
    );
}

export default LandingPage;
