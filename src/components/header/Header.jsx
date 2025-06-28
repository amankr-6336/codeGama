import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import CartPanel from "../cart/CartPanel";

function Header() {
  const cartProuductList = useSelector((state) => state.cartReducer.cart);
  const [showCart, setShowCart] = useState(false);


  function handleToggleCart(){
    setShowCart(!showCart);
  }

  return (
    <nav className="header">
      <div className="left-navbar">
        <p>Ecom</p>
      </div>

      <div className="right-navbar">
        <p onClick={handleToggleCart}>
          <IoCartOutline /> {cartProuductList.length>0 && <span>{cartProuductList.length}</span>}
        </p>
      </div>
      {showCart && <CartPanel close={handleToggleCart} cartItem={cartProuductList} />}
    </nav>
  );
}

export default Header;
