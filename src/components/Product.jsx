import React from "react";
import "./Product.css";

const Product = ({ img, label, price, description }) => {
  return (
    <article>
      <img src={img} alt={label} />
      <div className="content">
        <div>
          <h4>{label}</h4>
          {/* TODO decimela */}
          <span>${price}</span>
        </div>
        <p>{description}</p>
        <div>
          <p>Order a delivery</p>
          {/* icon */}
        </div>
      </div>
    </article>
  );
};

export default Product;
