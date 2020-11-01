import React  from "react";
import { useHistory } from "react-router-dom";
import{
    Container, Context, CompleteButton
} from "../../styles/CheckPaymentStyle";
import{
    IncorrectPage, ShippingData, PaymentData, CartData
} from "../../Imports/index";
import { useDispatch } from "react-redux";
import { placeAnOrder } from "../../reducers/PaymentSlice";
import { ClearCart } from "../../reducers/ContextSlice";

function CheckPayment(){
    const dispatch = useDispatch()
    const history = useHistory();

    const Buy = () =>{
        
        dispatch(placeAnOrder());
        dispatch(ClearCart());
        history.push("/");
    };

    return (
        <Container>
            <Context>
                <div>
                    <ShippingData />
                    <hr />
                    <PaymentData  />
                    <CompleteButton>
                        <button onClick={Buy}>place an order</button>
                    </CompleteButton>
                </div>
                <div>
                    <CartData />
                </div>
            </Context>
        </Container>
    );
}

export default CheckPayment;
