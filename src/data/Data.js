import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "./Api";

export const DataContext = createContext();

function Data({ children }) {
    const [DataControl] = useState({
        fetchData,
    });
    const [TableState, setTableState] = useState({ table: [] });

    const [payment, setPayment] = useState({
        shipping: [],
        paymentCont: [],
    });

    const store = {
        DATA: [TableState, setTableState],
        BUY: [payment, setPayment],
    };

    const Delete = () => {
        let cS = TableState.table;
        let cs = payment.shipping;
        let cp = payment.paymentCont;
        cS.splice(cS, 1);
        cs.splice(cs, 1);
        cp.splice(cp, 1);

        setTableState({ table: cS });
        setPayment({ shipping: cs, paymentCont: cp });
    };

    const Buy = () => setTableState({ table: [] });

    const handleClick = (id) => {
        const { table } = TableState;
        const TableValue = table.every(({ _id }) => _id !== id);
        const Context = table.concat(DataControl.fetchData[id - 1]);
        if (TableValue) {
            setTableState({ table: [...Context] });
        } else return;
    };

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("cartItem"));
        const paymentStore = JSON.parse(localStorage.getItem("paymentData"));
        if (paymentStore) setPayment(paymentStore);
        if (store) setTableState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(TableState));
        localStorage.setItem("paymentData", JSON.stringify(payment));
    }, [TableState, payment]);

    return (
        <DataContext.Provider
            value={{
                DataControl,
                Delete,
                store,
                handleClick,
                TableState,
                setTableState,
                Buy,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default Data;
