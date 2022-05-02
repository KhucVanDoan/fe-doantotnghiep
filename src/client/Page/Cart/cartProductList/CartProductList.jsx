import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import CartItem from "../cartItem/index";
import { updateCart } from "../../../redux/actions/cart.action";
function CartProductList(props) {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onChange = (id, quantity) => {
    const payload = {
      id: id,
      quantity: quantity,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="cart__left__product">
      <p>
        <span>Sản Phẩm</span>
        <span>Giá</span>
        <span>Số Lượng</span>
      </p>
      {cartItem &&
        cartItem?.cartItem.map((item, idx) => (
          <CartItem onChange={onChange} item={item} key={idx} />
        ))}
    </div>
  );
}

export default CartProductList;
