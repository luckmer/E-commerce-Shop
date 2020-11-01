import { combineReducers } from "redux";
import paymentSlice from "./PaymentSlice"
import contextSlice from "./ContextSlice"
const Index = combineReducers({
    Context: contextSlice,
    PaymentContext:paymentSlice,
})
export default Index;