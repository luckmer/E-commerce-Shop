import React from "react";
import{Container, ScrollPanel, ContextContainer, Box, Row} from "../../styles/CartStyles";
import { useSelector } from "react-redux";

function CartData() {
    const state = useSelector(state => state.Context.cart)

    return (
        <Container>
            <ScrollPanel>
                {state.map(({ src, context, title }, i) => (
                    <ContextContainer key={i}>
                        <img src={src} alt={src} />
                        <Box>
                            <Row>
                                <h2> {title}</h2>
                            </Row>
                            <p> {context}</p>
                        </Box>
                    </ContextContainer>
                ))}
            </ScrollPanel>
        </Container>
    );
}

export default CartData;
