import React from "react";
import "./CartPanel.css";
import CartItem from "../cartItem/CartItem";
import Button from "../Ui/Button/Button";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../store/Slice/CartSlice";

function CartPanel({ cartItem, close }) {
  const dispatch = useDispatch();
  const amount = cartItem.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  function handleCartReset() {
    dispatch(resetCart());
  }

  function handleRemoveItemFromCart(id){
   console.log(id);
   dispatch(removeItem(id))
  }

  return (
    <div className="cart-section">
      <div className="heading">
        <p>Cart</p>
        <Button type="plain" onClick={close}>
          <IoClose />
        </Button>
      </div>
      {cartItem.length > 0 ? (
        <>
          <div className="cart-reset">
            <Button size="small" type="border" onClick={handleCartReset}>Clear Cart</Button>
          </div>
          <div className="cart-item-list">
            {cartItem.map((data) => (
              <CartItem key={data.id} data={data} remove={handleRemoveItemFromCart} />
            ))}
            <hr />
            <div className="total-amount">
              <p>Total</p>
              <p>$ {amount.toFixed(2)}</p>
            </div>
          </div>
          <div className="checkout-button">
            <Button size="fullWidth">Checkout</Button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );
}

export default CartPanel;
