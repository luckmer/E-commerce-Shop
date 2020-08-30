import React, { useContext } from "react";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
import {
    Container,
    ShopHeader,
    ScrollPanel,
    ContextContainer,
    Box,
    Row,
    Section,
    Div,
} from "../styles/CartStyles";

function Cart() {
    const { Delete, TableState, increment, decrement } = useContext(
        DataContext
    );

    const Total = TableState.table.reduce(
        (price, item) => price + item.price,
        0
    );

    return (
        <Container>
            <ShopHeader>
                <p>Items : {TableState.table.length}</p>
                <p>Total : {Total}</p>
            </ShopHeader>
            <ScrollPanel>
                {TableState.table.map((item, i) => (
                    <ContextContainer key={i}>
                        <img src={item.src} alt={item.src} />
                        <Box>
                            <Row>
                                <h2> {item.title}</h2>
                                <span> ${item.price}</span>
                            </Row>
                            <p> {item.context}</p>
                            <div>
                                <button onClick={increment}>-</button>
                                <span>{item.count}</span>
                                <button onClick={decrement}>+</button>
                            </div>
                        </Box>
                        <Div onClick={Delete}>X</Div>
                    </ContextContainer>
                ))}
            </ScrollPanel>

            <Section>
                <Link to="/catalog">
                    <button>Continue</button>
                </Link>
                <button onClick={Delete}>Buy</button>
            </Section>
        </Container>
    );
}
export default Cart;
