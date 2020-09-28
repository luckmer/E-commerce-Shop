import React, { useState } from "react";
import { Container, Button } from "../../styles/EditStyles";

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

    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.edit(props.id, state);
        setState("");
        setStart(false);
    };

    const Edit = (
        <form onSubmit={handleSubmit}>
            <Container key={props.id}>
                <h1>SENDER</h1>
                <h2>{props.name}</h2>
                <div>
                    <p>address</p>
                    <h4>
                        address
                        <input
                            name="address"
                            value={state.address}
                            onChange={handleChange}
                        />
                    </h4>
                    <hr />
                    <h5>
                        The Town
                        <input
                            name="theTown"
                            value={state.theTown}
                            onChange={handleChange}
                        />
                    </h5>
                    <hr />
                    <h5>
                        Post Code
                        <input
                            name="PostalCode"
                            value={state.PostalCode}
                            onChange={handleChange}
                        />
                    </h5>
                    <hr />
                    <h5>
                        phone number
                        <input
                            name="phoneNumber"
                            value={state.phoneNumber}
                            onChange={handleChange}
                        />
                    </h5>
                    <hr />
                    <h5>
                        email address
                        <input
                            name="EmailAddress"
                            value={state.EmailAddress}
                            onChange={handleChange}
                        />
                    </h5>
                    <hr />
                </div>
            </Container>
            <Button type="submit">Submit</Button>
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
