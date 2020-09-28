import React, { useContext, useState } from "react";
import IncorrectPage from "../404";
import { DataContext } from "../../utils/Data";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import CardData from "../../components/Payment/CartData";
import { useHistory } from "react-router-dom";
import {
    ContainerContext,
    FormContext,
    ButtonPanel,
} from "../../styles/PaymentStyle";

const initialState = {
    id: "",
    CreditCardNumber: "",
    expiryDate: "",
    NameSurname: "",
    address: "",
    theTown: "",
    region: "",
    postcode: "",
};
function Payment() {
    const history = useHistory();
    const { handleSubmit, register } = useForm();
    const {
        store: {
            BUY: [payment, setPayment],
        },
    } = useContext(DataContext);

    const [data, setData] = useState(initialState);
    const { shipping, paymentCont } = payment;

    const handleUpload = () => {
        const newPayment = {
            id: nanoid(),
            CreditCardNumber: data.CreditCardNumber,
            expiryDate: data.expiryDate,
            NameSurname: data.NameSurname,
            address: data.address,
            theTown: data.theTown,
            region: data.region,
            postcode: data.postcode,
        };
        const next = paymentCont.concat(newPayment);
        setPayment({ paymentCont: next, shipping });
        history.push("/check");
    };

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    if (shipping.length <= 0 || paymentCont.length > 0)
        return <IncorrectPage />;

    return (
        <ContainerContext>
            <FormContext>
                <form onSubmit={handleSubmit(handleUpload)}>
                    <h1>Payment</h1>
                    <input
                        ref={register({ required: true })}
                        placeholder="CreditCardNumber"
                        value={data.CreditCardNumber}
                        onChange={handleChange}
                        name="CreditCardNumber"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="expiryDate"
                        value={data.expiryDate}
                        onChange={handleChange}
                        name="expiryDate"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="NameSurname"
                        value={data.NameSurname}
                        onChange={handleChange}
                        name="NameSurname"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="address"
                        value={data.address}
                        onChange={handleChange}
                        name="address"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="theTown"
                        value={data.theTown}
                        onChange={handleChange}
                        name="theTown"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="region"
                        value={data.region}
                        onChange={handleChange}
                        name="region"
                    />
                    <hr />
                    <input
                        ref={register({ required: true })}
                        placeholder="postcode"
                        value={data.postcode}
                        onChange={handleChange}
                        name="postcode"
                    />
                    <hr />
                    <ButtonPanel>
                        <button type="submit">Go to Check panel </button>
                    </ButtonPanel>
                </form>
                <div>
                    <CardData />
                </div>
            </FormContext>
        </ContainerContext>
    );
}

export default Payment;
