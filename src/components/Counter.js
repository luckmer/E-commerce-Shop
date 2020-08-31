import React from "react";

function Counter({ _id, count, setTableState, TableState }) {
    const decrement = (id) => {
        const { table } = TableState;
        table.forEach((item) => {
            if (item._id === id) item.count -= 1;
            if (item.count < 1) item.count = 1;
            setTableState({ table: table });
        });
    };

    const increment = (id) => {
        const { table } = TableState;
        table.forEach((item) => {
            if (item._id === id) item.count += 1;
            setTableState({ table: table });
        });
    };

    return (
        <>
            <button onClick={() => decrement(_id)}>-</button>
            <span>{count}</span>
            <button onClick={() => increment(_id)}>+</button>
        </>
    );
}

export default Counter;
