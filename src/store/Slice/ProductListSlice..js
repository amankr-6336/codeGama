import {createSlice} from '@reduxjs/toolkit';


const ProductListSlice=createSlice({
    name:'productListSlice',
    initialState:{
        products:[]
    },
    reducers:{
        setProducts:(state,action)=>{
            state.products=action.payload;
        }
    }
})

export default ProductListSlice.reducer;
export const{setProducts} =ProductListSlice.actions;