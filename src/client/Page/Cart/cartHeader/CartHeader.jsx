import React, { useEffect, useState } from "react";

import "./style.scss";
function CartHeader(props) {
  const { changeCart } = props;
  const [quantitycart, setQuantityCart] = useState([]);
  useEffect(() => {
    setQuantityCart(JSON.parse(localStorage.getItem("CART")));
  }, [changeCart]);

  const countQuantity = quantitycart?.reduce(
    (arr, cur) => arr + cur.quantity,
    0
  );
  return (
    <div className="cart__left__header">
      <p>GIỎ HÀNG</p>
      <p>({countQuantity || 0} Sản Phẩm)</p>
    </div>
  );
}

export default CartHeader;
