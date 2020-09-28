import React from "react";
import { EditPaymentData } from "../../Imports/index";

function PaymentData({ data, edit }) {
    return (
        <div>
            {data.map(
                ({
                    id,
                    CreditCardNumber,
                    address,
                    theTown,
                    region,
                    postcode,
                    NameSurname,
                    expiryDate,
                }) => (
                    <EditPaymentData
                        key={id}
                        edit={edit}
                        CreditCardNumber={CreditCardNumber}
                        address={address}
                        theTown={theTown}
                        region={region}
                        postcode={postcode}
                        id={id}
                        NameSurname={NameSurname}
                        expiryDate={expiryDate}
                    />
                )
            )}
        </div>
    );
}

export default PaymentData;
