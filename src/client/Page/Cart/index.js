import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import CartEmpty from "../Cart/cartEmpty/index";
import CartHeader from "../Cart/cartHeader/CartHeader";
import CartProductList from "../Cart/cartProductList/CartProductList";
import CartTotal from "./cartTotal";
import "./style.scss";
function Cart() {
  const countCart = useSelector((state) => state.cart);
  const countQuantity = countCart?.cartItem?.reduce(
    (arr, cur) => arr + cur.quantity,
    0
  );
  return (
    <>
      <Hearder />
      <section className="cart">
        <h2 style={{ marginLeft: "90px", marginBottom: "20px" }}>Giỏ hàng</h2>
        <div className="containers">
          <div className="cart__left">
            <CartHeader />
            {countQuantity <= 0 || countQuantity === undefined ? (
              <CartEmpty />
            ) : (
              <CartProductList />
            )}
          </div>

          {countQuantity <= 0 || countQuantity === undefined || (
            <div className="cart__right">
              <CartTotal />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
