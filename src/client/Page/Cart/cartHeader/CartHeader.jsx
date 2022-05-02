import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function CartHeader(props) {
  const countCart = useSelector((state) => state.cart);
  const countQuantity = countCart?.cartItem?.reduce(
    (arr, cur) => arr + cur.quantity,
    0
  );
  return (
    <div className="cart__left__header">
      <p>GIỎ HÀNG</p>
      <p>({countQuantity} Sản Phẩm)</p>
    </div>
  );
}

export default CartHeader;
