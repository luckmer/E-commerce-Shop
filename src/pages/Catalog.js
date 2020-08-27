import React, { useContext } from "react";
import { DataContext } from "../data/Data";

function Catalog() {
    const { DataControl } = useContext(DataContext);

    return (
        <div>
            {DataControl.table.map((item) => (
                <div key={item._id}>
                    <img src={item.src} alt={item.src} />
                </div>
            ))}
        </div>
    );
}

export default Catalog;
