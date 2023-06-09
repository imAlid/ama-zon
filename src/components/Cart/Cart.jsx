import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // const cart = props.cart;
  // const { card } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>selected item: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>
        <b>Grand Total: ${grandTotal.toFixed(2)}</b>
      </p>
    </div>
  );
};

export { Cart };
