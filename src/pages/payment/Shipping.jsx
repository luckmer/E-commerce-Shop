import React, { useContext, useState } from "react";
import { IncorrectPage, CardData } from "../../Imports/index";
import { DataContext } from "../../utils/Data";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import {
    ContainerContext,
    FormContext,
    ButtonPanel,
} from "../../styles/PaymentStyle";

const initialState = {
    id: "",
    name: "",
    Surname: "",
    address: "",
    theTown: "",
    PostalCode: "",
    phoneNumber: "",
    EmailAddress: "",
};

function Shipping() {
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const [data, setData] = useState(initialState);
    const {
        store: {
            DATA: [TableState],
            BUY: [payment, setPayment],
        },
    } = useContext(DataContext);
    const { table } = TableState;
    const { shipping } = payment;

    const handleUpload = () => {
        const newData = {
            id: nanoid(),
            name: data.name,
            Surname: data.Surname,
            address: data.address,
            theTown: data.theTown,
            PostalCode: data.PostalCode,
            phoneNumber: data.phoneNumber,
            EmailAddress: data.EmailAddress,
        };
        const test = shipping.concat(newData);
        setPayment({ shipping: test, paymentCont: [] });
        history.push("/payment");
    };
    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    if (table.length <= 0 || shipping.length > 0) return <IncorrectPage />;

    return (
        <ContainerContext>
            <FormContext>
                <form onSubmit={handleSubmit(handleUpload)}>
                    <h1>Shipping data</h1>
                    <input
                        type="text"
                        ref={register({ required: true })}
                        placeholder="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="text"
                        ref={register({ required: true })}
                        value={data.Surname}
                        name="Surname"
                        placeholder="Surname"
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="text"
                        ref={register({ required: true })}
                        placeholder="address"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="text"
                        ref={register({ required: true })}
                        placeholder="the town"
                        name="theTown"
                        value={data.theTown}
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="number"
                        ref={register({ required: true })}
                        placeholder="Postal Code"
                        name="PostalCode"
                        value={data.PostalCode}
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="tel"
                        ref={register({ required: true })}
                        placeholder="Phone number"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                    />
                    <hr />
                    <input
                        type="email"
                        ref={register({ required: true })}
                        placeholder="E-mail address"
                        name="EmailAddress"
                        value={data.EmailAddress}
                        onChange={handleChange}
                    />
                    <hr />
                    <ButtonPanel>
                        <button type="submit">Go to payment</button>
                    </ButtonPanel>
                </form>
                <div>
                    <CardData />
                </div>
            </FormContext>
        </ContainerContext>
    );
}

export default Shipping;
