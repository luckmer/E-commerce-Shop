import { createSlice } from "react-redux";

export const initialState = {
    shipping: [],
    paymentCont:[],
}

const paymentSlice = createSlice({
    name: "PaymentContext",
    initialState,
    reducers: {
        setPayment: {

            reducer: (state, action) => {
                state.paymentCont.push(action.payload)
            },
            
            prepare(newPayment){
                return {payload: {newPayment}}
            }
        },
        setShipping: {

            reducer: (state, action) => {
                state.shipping.push(action.payload)
            },

            prepare: (newData) => {
                return { payload: {newData} }
            },

        },
        editPayment: (state, action) =>{
            
            const {id, newContext } = action.payload;
            const paymentId = state.paymentCont.find(({ newPayment }) =>
                newPayment.id === id
            );

            if (paymentId) {
                paymentId.newPayment = newContext;
            }
        },
        editShipping: (state, action) =>{
            
            const {id, newContext } = action.payload;
            const shippingId = state.shipping.find(({ newData }) =>
                newData.id === id
            );

            if (shippingId) {
                shippingId.newData = newContext;
            }
        },
        placeAnOrder: (state)=>{
            
            state.shipping.splice(state, 200);
            state.paymentCont.splice(state, 200);
        }
    }
})

export const { setPayment, setShipping } = paymentSlice.actions;
export default paymentSlice.reducer;
