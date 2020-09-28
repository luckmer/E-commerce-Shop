import React from "react";

function ShippingData({ data }) {
    return (
        <div>
            <div>
                {data.map(
                    ({
                        name,
                        id,
                        Surname,
                        address,
                        theTown,
                        PostalCode,
                        phoneNumber,
                        EmailAddress,
                    }) => (
                        <div key={id}>
                            <p>{name}</p>
                            {Surname}
                            {address}
                            {theTown}
                            {PostalCode}
                            {phoneNumber}
                            {EmailAddress}
                        </div>
                    )
                )}
            </div>
            );
        </div>
    );
}

export default ShippingData;
