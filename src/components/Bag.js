import React from "react";
import { Div, Card, Slider } from "../styles/BagStyle";
import { useSelector } from "react-redux";

export const Bag = () => {

    const DataControl = useSelector(state => state.Context.fetchData)
    const Img = DataControl.map(({ src }) => src);


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
