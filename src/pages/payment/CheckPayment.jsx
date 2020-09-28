import React, { useContext } from "react";
import { DataContext } from "../../utils/Data";
import IncorrectPage from "../404";
import ShippingData from "../../components/Payment/ShippingData";
import PaymentData from "../../components/Payment/PaymentData";
import CartData from "../../components/Payment/CartData";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    padding: 15vh 10vw 0 10vw;

    div {
        padding: 0;
        width: 100%;
    }
`;
const Context = styled.div`
    display: flex;
`;

const CompleteButton = styled.div`
    margin: 30px 0 30px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
        border-radius: 100px;
        padding: 1em 10em 1em 10em;
        background-color: #1d65c1;
        color: #fff;
    }
`;

function CheckPayment() {
    const history = useHistory();
    const {
        edit,
        store: {
            DATA: [, setTableState],
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
                    <ShippingData data={shipping} edit={edit} />
                    <hr />
                    <PaymentData data={paymentCont} edit={edit} />
                    <CompleteButton>
                        <button onClick={Buy}>place an order </button>
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
