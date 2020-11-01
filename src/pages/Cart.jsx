import React from "react";
import { Img, Counter } from "../Imports/index";
import { Link, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { ClearCart, ApiView,ShippingView,PaymentView} from "../reducers/ContextSlice";
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

function Cart()
{
    const dispatch = useDispatch();
    const ApiDataView = useSelector(ApiView)    
    const shipping = useSelector(ShippingView);
    const paymentCont = useSelector(PaymentView);

    const history = useHistory();
        
    const Total = ApiDataView.reduce(
        (price, item) => price + item.price * item.count,
        0
    );

    if (ApiDataView.length <= 0) {
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

    const handleClick = () =>{
        

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
                <p>Items : {ApiDataView.length}</p>
                <p>Total : {Total}</p>
            </ShopHeader>
            <ScrollPanel>
                {ApiDataView.map(
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
                                    />
                                </div>
                            </Box>
                            <Div onClick={()=> dispatch(ClearCart())}>X</Div>
                        </ContextContainer>
                    )
                )}
            </ScrollPanel>
            <Section>
                <Link to="/catalog">
                    <button>Continue</button>
                </Link>

                <button onClick={handleClick} >Buy</button>
            </Section>
        </Container>
    );
}
export default Cart;
