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
    const { Delete, TableState } = useContext(DataContext);
    return (
        <Container>
            <ShopHeader>
                <p>Items : {TableState.table.length}</p>
                <p>Total : 0$</p>
            </ShopHeader>
            <ScrollPanel>
                {TableState.table.map(
                    ({ src, context, title, count, price }, i) => (
                        <ContextContainer key={i}>
                            <img src={src} alt={src} />
                            <Box>
                                <Row>
                                    <h2> {title}</h2>
                                    <span> ${price}</span>
                                </Row>
                                <p> {context}</p>
                                <div>
                                    <button>-</button>
                                    <span>{count}</span>
                                    <button>+</button>
                                </div>
                            </Box>
                            <Div onClick={Delete}>X</Div>
                        </ContextContainer>
                    )
                )}
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
