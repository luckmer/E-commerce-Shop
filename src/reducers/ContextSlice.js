import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/Api";

const initialState = {
    fetchData,
    cart: [],
    emptyCart: [],
}

const contextSlice = createSlice({
    name: 'Context',
    initialState,
    reducers: {
        increment: (state, action) =>{
            const { id } = action.payload
            const test = state.cart.find(item => item._id === id)
            if (test) {
                test.count += 1
            }
        },
        decrement: (state, action) =>{
            const { id } = action.payload
            const test = state.cart.find(item => item._id === id)
            if (test) {
                test.count <= 1 ? test.count = 1  : test.count -= 1
            }
        },
        buy: (state, action) =>{
            const { id } = action.payload;
            const TableValue = state.cart.every(( state) => state._id !== id );
            const Context = state.emptyCart.concat(fetchData[id - 1])
            if (TableValue) {
                state.cart.push(...Context)
            }
        },
        ClearCart: (state)=> {
            state.cart.splice(state, 200);
        },
    },
})

export const { increment, decrement, buy,ClearCart } = contextSlice.actions
export default contextSlice.reducer;