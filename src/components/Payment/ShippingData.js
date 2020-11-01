import React from "react";
import { EditShoppingData } from "../../Imports/index";
import { useSelector } from "react-redux";


function ShippingData(){
    
    const state = useSelector((state) => state.PaymentContext.shipping);
    const Mapping = state.map(({ newData }) => newData); 

    return (
        <div>
            {Mapping.map(
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
