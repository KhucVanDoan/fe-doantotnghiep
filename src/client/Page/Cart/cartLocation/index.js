import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Hearder from "../../../components/Header";
import CartTotal from "../cartTotal";
import "./style.scss";
import UserLocationForm from "./userLocationForm";
function CartLocationConfirm(props) {
  const [codeSale, setCodeSale] = useState(7);
  return (
    <>
      <Hearder />
      <section className="cart_order">
        <div className="container_order">
          <div className="cart__left_order">
            <div className="cart-location-confirm">
              <div className="header">Thông tin đặt hàng</div>
              <UserLocationForm codeSale={codeSale} />
            </div>
          </div>
          <div className="cart__right_order">
            <CartTotal setCodeSale={setCodeSale} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CartLocationConfirm;
