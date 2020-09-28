import React, { useContext } from "react";
import { DataContext } from "../../data/Data";
import IncorrectPage from "../404";
import ShippingData from "../../components/Payment/ShippingData";
import PaymentData from "../../components/Payment/PaymentData";
function CheckPayment() {
    const {
        store: {
            BUY: [payment],
        },
    } = useContext(DataContext);

    const { shipping, paymentCont } = payment;

    if (shipping.length === 0 || paymentCont.length === 0)
        return <IncorrectPage />;

    return (
        <div>
            <ShippingData data={shipping} />
            <PaymentData data={paymentCont} />
        </div>
    );
}

export default CheckPayment;
