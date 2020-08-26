import React, { useContext } from "react";
import ImgCarousel from "../components/Carousel";
import { DataContext } from "../data/Data";
import { Bag } from "../components/Bag";
import { Link } from "react-router-dom";
import { Container, Contact, Shoes } from "../styles/products";
function Products() {
    const { fetchData } = useContext(DataContext);

    return (
        <Container>
            <ImgCarousel />
            <Bag />

            <Shoes>
                {fetchData.map(({ src, _id }) => (
                    <Link to={`/${_id}`} key={_id}>
                        <img src={src} alt={src} />
                    </Link>
                ))}
            </Shoes>
            <Contact>
                <div>
                    <ul>
                        <li>dsa</li>
                        <li>dsa</li>
                        <li>dsa</li>
                    </ul>
                </div>
            </Contact>
        </Container>
    );
}

export default Products;
