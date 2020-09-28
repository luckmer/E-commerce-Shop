import React from "react";

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
`;
const Button = styled.button`
    border-radius: 100px;
    padding: 5px 50px 5px 50px;
    background-color: #1d65c1;
    color: #fff;
`;
function ShippingData({ data }) {
    return (
        <div>
            {data.map(
                ({
                    name,
                    id,
                    address,
                    theTown,
                    PostalCode,
                    phoneNumber,
                    EmailAddress,
                }) => (
                    <Container key={id}>
                        <h1>SENDER</h1>
                        <h2>{name}</h2>
                        <div>
                            <p>address</p>
                            <h4> {address}</h4>
                            <h5>{theTown}</h5>
                            <h5> {PostalCode}</h5>
                            <h5>phone number : {phoneNumber}</h5>
                            <h5>email address :{EmailAddress}</h5>
                        </div>
                    </Container>
                )
            )}
            <Button>Edit</Button>
        </div>
    );
}

export default ShippingData;
