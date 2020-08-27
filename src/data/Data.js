import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();
function Data({ children }) {
    const [DataControl, setDataControl] = useState({
        fetchData,
        table: [],
    });

    // useEffect(() => {
    //     const store = JSON.parse(localStorage.getItem("cartContext"));
    //     if (store) setDataControl(store);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("cartContext", JSON.stringify(DataControl));
    // }, [DataControl]);

    const Delete = () => {
        let clearState = DataControl.table;
        clearState.splice(clearState, 1);
        setDataControl({ table: clearState });
    };

    return (
        <DataContext.Provider value={{ DataControl, Delete }}>
            {children}
        </DataContext.Provider>
    );
}

export default Data;
