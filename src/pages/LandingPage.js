import React, { useContext } from "react";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import { Container, ImgPanel } from "../styles/LandingStyle";
function LandingPage() {
    const { fetchData } = useContext(DataContext);
    return (
        <Container>
            {fetchData.map(({ src, id }) => (
                <ImgPanel>
                    <Link to="/catalog">
                        <img src={src} alt={src} key={id} />
                    </Link>
                </ImgPanel>
            ))}
        </Container>
    );
}

export default LandingPage;
