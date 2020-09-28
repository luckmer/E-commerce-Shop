import React, { useState } from "react";
import { Container, Button } from "../../styles/EditStyles";
import { useForm } from "react-hook-form";

function PaymentContext(props) {
    const initialState = {
        id: props.id,
        address: "",
        theTown: "",
        PostalCode: "",
        phoneNumber: "",
        EmailAddress: "",
    };

    const [state, setState] = useState(initialState);
    const [start, setStart] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleUpload = () => {
        props.edit(props.id, state);
        setState("");
        setStart(false);
    };

    const Edit = (
        <form onSubmit={handleSubmit(handleUpload)}>
            <Container key={props.id}>
                <h1>SENDER</h1>
                <h2>{props.name}</h2>
                <div>
                    <p>address</p>
                    <h4>
                        address
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h4>
                    <hr />
                    <h5>
                        The Town
                        <input
                            type="text"
                            name="theTown"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                    <hr />
                    <h5>
                        Post Code
                        <input
                            type="number"
                            name="PostalCode"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                    <hr />
                    <h5>
                        phone number
                        <input
                            type="number"
                            name="phoneNumber"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                    <hr />
                    <h5>
                        email address
                        <input
                            type="email"
                            name="EmailAddress"
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                    </h5>
                    <hr />
                </div>
            </Container>
            <Button type="submit">Submit</Button>
            <Button onClick={() => setStart(!start)}>Exit</Button>
        </form>
    );

    const View = (
        <div>
            <Container key={props.id}>
                <h1>SENDER</h1>
                <h2>{props.name}</h2>
                <div>
                    <p>address</p>
                    <h4> {props.address}</h4>
                    <h5>{props.theTown}</h5>
                    <h5> {props.PostalCode}</h5>
                    <h5>phone number : {props.phoneNumber}</h5>
                    <h5>email address :{props.EmailAddress}</h5>
                </div>
            </Container>
            <Button onClick={() => setStart(!start)}>Edit</Button>
        </div>
    );

    return <>{start ? Edit : View}</>;
}

export default PaymentContext;
