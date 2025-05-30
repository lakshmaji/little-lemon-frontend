import React from "react";
import "./Product.css";
import basketIcon from "./../../assets/basket.svg";
import { toTwoDecimals } from "../../utils";

const Product = ({ img, label, price, description }) => {
  return (
    <article className="product">
      <img className="product__img" src={img} alt={label} />
      <div className="content">
        <div className="product__snap">
          <h3>{label}</h3>
          <span>${toTwoDecimals(price)}</span>
        </div>
        <p className="product__description">{description}</p>
        <div className="product__wrapper">
          <p className="product__info">Order a delivery</p>
          <img
            className="product__cart_img"
            src={basketIcon}
            alt="add to cart"
            height={30}
            width={30}
          />
        </div>
      </div>
    </article>
  );
};

export default Product;
