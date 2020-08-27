import React, { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext } from "../data/Data";
import { Section } from "../styles/products";

function ImgCarousel() {
    const [index, setIndex] = useState(0);
    const { DataControl } = useContext(DataContext);
    const Img = DataControl.fetchData.map(({ src }) => src);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Section>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 " src={Img[7]} alt={Img[7]} />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img[11]}
                        alt={Img[11]}
                    />
                </Carousel.Item>
            </Carousel>
        </Section>
    );
}

export default ImgCarousel;
