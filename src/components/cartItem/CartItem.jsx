import React from 'react'
import './CartItem.css'
import QuantityControl from '../quantityControl/QuantityControl';
import { CiCircleRemove } from "react-icons/ci";
import Button from '../Ui/Button/Button';

function CartItem({data,remove}) {
  return (
    <div className="cart-item">
        <div className="item-name">
           {data.title}
        </div>
        <div className="item-quantity">
            <QuantityControl Item={data} />
        </div>
        <div className="price">
           $ {data.quantity*data.price}
        </div>
        <div className="remove-item">
            <CiCircleRemove onClick={()=>remove(data.id)}/>
        </div>
    </div>
  )
}

export default CartItem;