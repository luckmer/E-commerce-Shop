import React, { useContext } from "react";
import { Div, Card, Slider } from "../styles/BagStyle";
import { DataContext } from "../data/Data";

export const Bag = () => {
    const { DataControl } = useContext(DataContext);
    const Img = DataControl.fetchData.map(({ src }) => src);
    return (
        <Slider>
            <header>New </header>
            <hr />
            <Div>
                <Card>
                    <img src={Img[8]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[11]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[14]} alt={Img} />
                </Card>
                <Card>
                    <img src={Img[9]} alt={Img} />
                </Card>
            </Div>
        </Slider>
    );
};
