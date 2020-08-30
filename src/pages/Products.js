import React, { useContext } from "react";
import { Container, Shoes } from "../styles/products";
import { ContactPanel, ImgCarousel } from "../Imports/index";
import { DataContext } from "../data/Data";
import { Bag } from "../components/Bag";
import { Link } from "react-router-dom";

function Products() {
    const { DataControl } = useContext(DataContext);
    const Sliced = DataControl.fetchData.slice(8, 11);
    return (
        <Container>
            <ImgCarousel />
            <Bag />
            <Shoes>
                {Sliced.map(({ src, _id }) => (
                    <Link to={`/${_id}`} key={_id}>
                        <div>
                            <img src={src} alt={src} />
                        </div>
                    </Link>
                ))}
            </Shoes>
            <ContactPanel />
        </Container>
    );
}

export default Products;
