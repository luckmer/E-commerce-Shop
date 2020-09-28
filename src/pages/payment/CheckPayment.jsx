import React, { useContext } from "react";
import { DataContext } from "../../utils/Data";
import { useHistory } from "react-router-dom";
import {
    Container,
    Context,
    CompleteButton,
} from "../../styles/CheckPaymentStyle";
import {
    IncorrectPage,
    ShippingData,
    PaymentData,
    CartData,
} from "../../Imports/index";

function CheckPayment() {
    const history = useHistory();

    const {
        edit,
        editShoppingData,
        store: {
            DATA: [setTableState],
            BUY: [payment, setPayment],
        },
    } = useContext(DataContext);

    const { shipping, paymentCont } = payment;

    if (shipping.length === 0 || paymentCont.length === 0)
        return <IncorrectPage />;

    const Buy = () => {
        setTableState({ table: [] });
        setPayment({
            shipping: [],
            paymentCont: [],
        });
        history.push("/");
    };

    return (
        <Container>
            <Context>
                <div>
                    <ShippingData data={shipping} edit={editShoppingData} />
                    <hr />
                    <PaymentData data={paymentCont} edit={edit} />
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
