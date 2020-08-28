import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();
function Data({ children }) {
    const [DataControl] = useState({
        fetchData,
    });
    const [TableState, setTableState] = useState({ table: [] });

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("cartItem"));
        if (store) setTableState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(TableState));
    }, [TableState]);

    const Delete = () => {
        let clearState = TableState.table;
        clearState.splice(clearState, 1);
        setTableState({ table: clearState });
    };

    const handleClick = (id) => {
        const { fetchData } = DataControl;
        const { table } = TableState;
        const check = table.every((item) => {
            return item._id === id;
        });
        if (check) {
            setTableState({ table: [...fetchData] });
        } else return;
    };

    return (
        <DataContext.Provider
            value={{ DataControl, Delete, handleClick, TableState }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default Data;
