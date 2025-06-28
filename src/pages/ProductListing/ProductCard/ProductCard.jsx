import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import RatingComponent from "../../../components/ratingComponent/RatingComponent";
import QuantityControl from "../../../components/quantityControl/QuantityControl";

function ProductCard({ productData }) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/product/${productData.id}`);
  }

 
  return (
    <div className="product-card" onClick={handleNavigation}>
      <div className="product-image">
        <img src={productData.image} alt="" />
      </div>
      <div className="product-info">
        <div className="product-price">
          <p>${productData.price}</p>
        </div>
        <div className="product-name">
          <h4>{productData.title}</h4>
        </div>
        <div className="rating">
          <RatingComponent rating={productData.rating} />
        </div>
      </div>
      <div className="cart-button">
        <QuantityControl Item={productData} />
      </div>
    </div>
  );
}

export default ProductCard;
