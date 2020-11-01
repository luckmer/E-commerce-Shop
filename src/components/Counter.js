import React from "react";
import {  useDispatch } from "react-redux";
import { decrement, increment } from "../reducers/ContextSlice";

function Counter({ _id, count }){

    const dispatch = useDispatch();

    const Increment = () => dispatch(increment({ id: _id }));
    const Decrement = () => dispatch(decrement({ id: _id }));

    return (
        <>
            <button onClick={() => Decrement(_id)}>-</button>
            <span>{count}</span>
            <button onClick={() => Increment(_id)}>+</button>
        </>
    );
}

export default Counter;
