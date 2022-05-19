import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer";
import Hearder from "../../../../components/Header";
import "./style.scss";
function PaymentSuccess() {
  return (
    <>
      <Hearder />
      <div className="payment-success">
        <div className="info">
          <p> Xin cảm ơn quý khách đã mua hàng tại Xwatch</p>
          <Link className="back-to-home" to="/">
            &lt; Quay lại trang chủ
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
