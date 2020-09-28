import React, { useContext } from "react";
import {
    Container,
    ScrollPanel,
    ContextContainer,
    Box,
    Row,
} from "../../styles/CartStyles";
import { DataContext } from "../../utils/Data";

function CartData() {
    const {
        store: {
            DATA: [TableState],
        },
    } = useContext(DataContext);
    return (
        <Container>
            <ScrollPanel>
                {TableState.table.map(({ src, context, title }, i) => (
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
