import React from "react";
import { EditShoppingData } from "../../Imports/index";

function ShippingData({ data, edit }) {
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
                    <EditShoppingData
                        edit={edit}
                        key={id}
                        name={name}
                        id={id}
                        address={address}
                        theTown={theTown}
                        PostalCode={PostalCode}
                        phoneNumber={phoneNumber}
                        EmailAddress={EmailAddress}
                    />
                )
            )}
        </div>
    );
}

export default ShippingData;
