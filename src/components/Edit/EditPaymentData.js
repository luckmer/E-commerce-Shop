import React, { useState } from "react";
import { Container, Button } from "../../styles/EditStyles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editPayment } from "../../reducers/PaymentSlice";

function EditPaymentData(props){
    
    const dispatch = useDispatch();
    const initialState = {
        id: props.id,
        CreditCardNumber: "",
        address: "",
        theTown: "",
        region: "",
        postcode: "",
    };
    
    const [state, setState] = useState(initialState);
    const [start, setStart] = useState(false);

    const { handleSubmit, register } = useForm();
    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleUpload = () => {
        const newContext = state
        dispatch(editPayment({id : props.id ,newContext }))
        setStart(false);
    };

    const editContext = (
        <form onSubmit={handleSubmit(handleUpload)}>
            <Container>
                <h1>PAYMENT</h1>
                <hr />
                <h4>
                    Credit Card Number
                    <input
                        type="number"
                        name="CreditCardNumber"
                        onChange={handleChange}
                        ref={register({ required: true })}
                    />
                </h4>
                <hr />
                <div>
                    <p>Billing address</p>
                    <h5>
                        address:
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                    <hr />
                    <h5>
                        The Town:
                        <input
                            type="text"
                            name="theTown"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <hr />
                        region:
                        <input
                            type="text"
                            name="region"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <hr />
                        postCode:
                        <input
                            type="number"
                            name="postcode"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                </div>
            </Container>
            <Button type="submit">Submit</Button>
            <Button onClick={() => setStart(!start)}>Exit</Button>
        </form>
    );

    const View = (
        <div>
            <Container key={props.id}>
                <h1>PAYMENT</h1>
                <h4>{props.CreditCardNumber}</h4>
                <div>
                    <p>Billing address</p>
                    <h5>{props.address}</h5>
                    <h5>
                        {props.theTown}, {props.region}, {props.postcode}
                    </h5>
                </div>
            </Container>
            <Button onClick={() => setStart(!start)}>Edit</Button>
        </div>
    );

    return <div>{start ? editContext : View}</div>;
}

export default EditPaymentData;
