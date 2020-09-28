import React, { useContext } from "react";
import { Container, Shoes } from "../styles/products";
import { Contact, ImgCarousel } from "../Imports/index";
import { DataContext } from "../utils/Data";
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
                {Sliced.map(({ src, _id, type }) => (
                    <Link to={`/${_id}`} key={_id}>
                        <header>{type}</header>
                        <hr />
                        <div>
                            <img src={src} alt={src} />
                        </div>
                    </Link>
                ))}
            </Shoes>
            <Contact />
        </Container>
    );
}

export default Products;
