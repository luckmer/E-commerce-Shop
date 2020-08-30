import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();
function Data({ children }) {
    const [DataControl] = useState({
        fetchData,
    });
    const [TableState, setTableState] = useState({ table: [] });
    const [count, setCount] = useState(0);
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

    const handleClick = (_id) => {
        const { table } = TableState;
        const Context = table.concat(DataControl.fetchData[_id - 1]);
        setTableState({ table: [...Context] });
    };

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <DataContext.Provider
            value={{
                DataControl,
                Delete,
                handleClick,
                TableState,
                decrement,
                increment,
                count,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default Data;
