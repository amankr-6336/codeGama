import {createSlice} from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:"cartSlice",
    initialState:{
        cart:[],
    },


    reducers:{
        addToCart:(state,action)=>{
            const product=action?.payload;
            if(!product){
                return ;
            }

            const currentProduct={
                id:product.id,
                title:product.title,
                price:product.price
            }

            const index=state.cart.findIndex((item)=>item.id===currentProduct.id);

            if(index===-1){
                state.cart.push({...currentProduct,quantity:1});
            }
            else{
                state.cart[index].quantity+=1;
            }

        },
        removeFromCart:(state,action)=>{
            const currentProductId=action?.payload.id;

            const index=state.cart.findIndex((item)=>item.id===currentProductId);

            if(index===-1){
                return ;
            }

            if(state.cart[index].quantity===1){
                state.cart=state.cart.filter((item)=> item.id!==currentProductId);
            }
            else{
                state.cart[index].quantity-=1;
            }
        },
        removeItem:(state,action)=>{
           const productId=action.payload;
           console.log(productId);
           state.cart=state.cart.filter((data)=> data.id!==productId );

        },
        resetCart:(state,action)=>{
            console.log(action.payload);
            state.cart=[];
        }
    }

})

export default cartSlice.reducer;

export const{addToCart,removeFromCart,resetCart,removeItem}=cartSlice.actions;