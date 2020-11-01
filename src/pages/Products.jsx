import React from "react";
import { Container, Shoes } from "../styles/products";
import { Contact, ImgCarousel } from "../Imports/index";
import { Bag } from "../components/Bag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Products()
{
    const  state = useSelector(state => state.Context.fetchData)
    const Sliced =state.slice(8, 11);
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
