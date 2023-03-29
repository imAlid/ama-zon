import React from "react";
import "./Product.css";
const Product = (props) => {
  //   console.log(props.product);
  const { img, name, price, quantity, ratings, seller } = props.product;

  const handelAddToCart = props.handelAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="price">Price${price}</p>
        <p className="manufacturer">Manufacturer{seller}</p>
        <p className="rating">Rating: {ratings} Star</p>
      </div>
      <button
        onClick={() => handelAddToCart(props.product)}
        className="cart-btn"
      >
        Add to cart
      </button>
    </div>
  );
};
import "./Product.css";
export default Product;
