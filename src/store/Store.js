import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from './Slice/ProductListSlice.'
import cartReducer from './Slice/CartSlice'
export default configureStore({
    reducer:{
       ProductListReducer,
       cartReducer
    }
})