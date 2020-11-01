import React, { useState } from "react";
import{
    IncorrectPage, CardData
} from "../../Imports/index";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import{
    ContainerContext, FormContext, ButtonPanel
} from "../../styles/PaymentStyle";
import { useDispatch,useSelector } from "react-redux";
import { setPayment } from "../../reducers/PaymentSlice";

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

function Payment()
{
    const state = useSelector(state => state.PaymentContext.paymentCont)
    const dispatch = useDispatch()
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const [data, setData] = useState(initialState);

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
        dispatch(setPayment(newPayment));
        history.push("/check");
    };

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    
        return state.length >= 1 ? <IncorrectPage /> : (
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
                        type="date"
                        ref={register({ required: true })}
                        placeholder="expiryDate"
                        value={data.expiryDate}
                        onChange={handleChange}
                        name="expiryDate"
                    />
                    <hr />
                    <input
                        type="text"
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
    )
}

export default Payment;
