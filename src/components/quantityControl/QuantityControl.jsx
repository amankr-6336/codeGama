import React from "react";
import "./QuantityControl.css";
import Button from "../Ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/Slice/CartSlice";

function QuantityControl({ Item }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartReducer.cart);
  const addedItem = cartItem.find((item) => item.id === Item.id);

  function handleAddToCart(e) {
    e.stopPropagation();
    dispatch(addToCart(Item));
  }
  function handleRemoveFromCart(e) {
    e.stopPropagation();
    dispatch(removeFromCart(Item));
  }
  return (
    <>
      {addedItem ? (
        <div className="quantity-controls">
          <Button size="small" type="secondary" onClick={handleRemoveFromCart}>
            -
          </Button>
          <span>{addedItem.quantity}</span>
          <Button size="small" type="secondary" onClick={handleAddToCart}>
            +
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddToCart} type="border" size="fullWidth">
          ADD TO CART
        </Button>
      )}
    </>
  );
}

export default QuantityControl;
