import React from "react";
import { EditPaymentData } from "../../Imports/index";
import { useSelector } from "react-redux";

function PaymentData(){
    

    const state = useSelector((state) => state.PaymentContext.paymentCont);
    const Mapping = state.map(({ newPayment }) => newPayment);
    return (
        <div>
            {Mapping.map(
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
