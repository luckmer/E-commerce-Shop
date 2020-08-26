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
                <Link to="/details">
                    <img src={Mapping[0]} />
                </Link>
            </ImgOne>
            <ImgTwo>
                <Link to="/details">
                    <img src={Mapping[2]} />
                </Link>
            </ImgTwo>
            <ImgThree>
                <Link to="/details">
                    <img src={Mapping[3]} />
                </Link>
            </ImgThree>
            <ImgFour>
                <Link to="/details">
                    <img src={Mapping[11]} />
                </Link>
            </ImgFour>
        </Container>
    );
}

export default LandingPage;
