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
        const { table } = TableState;
        const TableValue = table.every(({ _id }) => _id !== id);
        const Context = table.concat(DataControl.fetchData[id - 1]);
        if (TableValue) {
            setTableState({ table: [...Context] });
        } else return;
    };

    return (
        <DataContext.Provider
            value={{
                DataControl,
                Delete,
                TableState,
                setTableState,
                handleClick,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default Data;
