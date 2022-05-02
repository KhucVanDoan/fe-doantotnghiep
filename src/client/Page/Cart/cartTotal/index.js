import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { formatMoney } from "../../../common/common";

const CartTotal = ({ setCodeSale }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [display, setDisplay] = useState(false);
  const [input, setInput] = useState("");
  const history = useNavigate();
  const location = useLocation();
  const countCart = useSelector((state) => state.cart);
  const price = countCart?.cartItem?.reduce(
    (arr, cur) => arr + cur.price * cur.quantity,
    0
  );
  console.log("e", input);
  const salePrice = 0;
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/cart/order") {
      setIsConfirm(true);
      setDisplay(true);
    } else {
      setIsConfirm(false);
      setDisplay(false);
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (!isConfirm) {
      history("/cart/order");
      setIsConfirm(true);
      return;
    }
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      {isConfirm ? (
        ""
      ) : (
        <div className="discount__code">
          <h2>Mã Giảm Giá</h2>
          <div className="codeSale">
            <input
              type="text"
              placeholder="Nhập mã giảm giá...."
              onChange={(e) => setInput(e.target.value)}
            />
            <button>ÁP DỤNG</button>
          </div>
        </div>
      )}

      <div className="checkout">
        <p>
          <span>Tạm Tính:</span>
          <span>{formatMoney(+price)}</span>
        </p>
        <p>
          <span>Giảm Giá:</span> <span>{salePrice || 0}</span>
        </p>
        <p>
          <span>Phí vận chuyển</span> <span>{0}</span>
        </p>
        <p>
          <span>Thành Tiền:</span> <span>{price - salePrice || 0}</span>
        </p>
      </div>
      {!display && (
        <>
          <button onClick={handleClick}>TIẾN HÀNH ĐẶT HÀNG</button>
          <button className="back" onClick={handleBack}>
            QUAY LẠI
          </button>
        </>
      )}
    </>
  );
};

export default CartTotal;
