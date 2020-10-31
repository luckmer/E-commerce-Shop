import React, { useContext } from "react";
import { DataContext } from "../utils/Data";
import { Img, Counter } from "../Imports/index";
import { Link, useHistory } from "react-router-dom";
import {
    Container,
    ShopHeader,
    ScrollPanel,
    ContextContainer,
    Box,
    Row,
    Section,
    Div,
    Information,
} from "../styles/CartStyles";

function Cart() {
    const history = useHistory();
    const {
        store: {
            DATA: [TableState, setTableState],
            BUY: [payment],
            Delete,
        },
    } = useContext(DataContext);
    const { shipping, paymentCont } = payment;

    const Total = TableState.table.reduce(
        (price, item) => price + item.price * item.count,
        0
    );

    if (TableState.table.length <= 0) {
        return (
            <Information>
                <img src={Img} alt={Img} />
                <h5>Find your own style</h5>
                <Link to="/catalog">
                    <button>Buy</button>
                </Link>
            </Information>
        );
    }

    const handleClick = () => {
        if (shipping.length <= 0) {
            history.push("/checkout");
        } else {
            history.push("/payment");
        }

        if (shipping.length >= 1) {
            if (paymentCont.length >= 1) {
                history.push("/check");
            }
        } else {
            history.push("/checkout");
        }
    };

    return (
        <Container>
            <ShopHeader>
                <p>Items : {TableState.table.length}</p>
                <p>Total : {Total}</p>
            </ShopHeader>
            <ScrollPanel>
                {TableState.table.map(
                    ({ src, price, count, _id, context, title }, i) => (
                        <ContextContainer key={i}>
                            <img src={src} alt={src} />
                            <Box>
                                <Row>
                                    <h2> {title}</h2>
                                    <span> ${price * count}</span>
                                </Row>
                                <p> {context}</p>
                                <div>
                                    <Counter
                                        _id={_id}
                                        count={count}
                                        setTableState={setTableState}
                                        TableState={TableState}
                                    />
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

                <button onClick={handleClick}>Buy</button>
            </Section>
        </Container>
    );
}
export default Cart;
