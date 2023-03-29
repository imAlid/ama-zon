import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // const cart = props.cart;
  // const { card } = props;

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>selected item: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge:</p>
      <p>Tax:</p>
      <p>
        <b>Grand Total:</b>
      </p>
    </div>
  );
};

export { Cart };
