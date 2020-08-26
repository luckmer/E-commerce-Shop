import React, { useContext } from "react";
import { Div, Card, Slider } from "../styles/BagStyle";
import { DataContext } from "../data/Data";

export const Bag = () => {
    const { fetchData } = useContext(DataContext);
    const Img = fetchData.map(({ src }) => src);
    return (
        <Slider>
            <header>New </header>
            <hr />
            <Div>
                <Card>
                    <img src={Img[12]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[11]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[14]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[15]} alt={Img} />
                </Card>
            </Div>
        </Slider>
    );
};
