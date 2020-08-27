import React, { useContext } from "react";
import { DataContext } from "../data/Data";

function Cart() {
    const { DataControl } = useContext(DataContext);

    return (
        <div>
            {DataControl.table.map(({ src, price, _id, context }) => (
                <div key={_id}>
                    <img src={src} alt={src} />
                    <p>{price}</p>
                    <h5>{context}</h5>
                </div>
            ))}
        </div>
    );
}
export default Cart;
