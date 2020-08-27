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
} from "../styles/CartStyles";

function Cart() {
    const { DataControl, Delete } = useContext(DataContext);

    return (
        <Container>
            <ShopHeader>
                <p>Items : {DataControl.table.length}</p>
                <p>Total : 0$</p>
            </ShopHeader>
            <ScrollPanel>
                {DataControl.table.map(
                    ({ src, _id, context, title, count, price }) => (
                        <ContextContainer key={_id}>
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
                            <div
                                style={{
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                                onClick={Delete}
                            >
                                X
                            </div>
                        </ContextContainer>
                    )
                )}
            </ScrollPanel>

            <Section>
                <Link to="/catalog">
                    <button>Continue</button>
                </Link>
                <button>Buy</button>
            </Section>
        </Container>
    );
}
export default Cart;
