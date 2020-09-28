import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    h1,
    h4,
    h4 {
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid black;
    }
`;
const Button = styled.button`
    border-radius: 100px;
    padding: 5px 50px 5px 50px;
    font-weight: bold;
`;

function EditPaymentData(props) {
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

    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.edit(props.id, state);
        setState("");
        setStart(false);
    };

    const editContext = (
        <form onSubmit={handleSubmit}>
            <Container>
                <h1>PAYMENT</h1>
                <hr />
                <h4>
                    Credit Card Number
                    <input
                        name="CreditCardNumber"
                        value={state.CreditCardNumber}
                        onChange={handleChange}
                    />
                </h4>
                <hr />
                <div>
                    <p>Billing address</p>
                    <h5>
                        address:
                        <input
                            name="address"
                            value={state.address}
                            onChange={handleChange}
                        />
                    </h5>
                    <hr />
                    <h5>
                        TheTown:
                        <input
                            name="theTown"
                            value={state.theTown}
                            onChange={handleChange}
                        />
                        <hr />
                        region:
                        <input
                            name="region"
                            value={state.region}
                            onChange={handleChange}
                        />
                        <hr />
                        postCode:
                        <input
                            name="postcode"
                            value={state.postcode}
                            onChange={handleChange}
                        />
                    </h5>
                </div>
            </Container>
            <Button type="submit">Submit</Button>
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
