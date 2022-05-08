import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "../../../components/Quantity";
import "./style.scss";
import { deleteItem } from "../../../redux/actions/cart.action";
import { useDispatch } from "react-redux";
import { formatMoney } from "../../../common/common";
import { ROOT_URL } from "../../../constants/config";
const CartItem = ({ onChange, item, changeCart, setChangeCart }) => {
  const dispatch = useDispatch();
  const handleButtonDeleteClick = () => {
    dispatch(deleteItem(item.id, () => setChangeCart(!changeCart)));
  };
  const handleQuantityChange = (value) => {
    if (!onChange) return;
    onChange(item.id, value);
  };
  console.log("item", item);
  return (
    <div className="item">
      <Link to={`/product/`}>
        <img src={`${ROOT_URL}/${item?.images?.url}`} alt="" />
      </Link>

      <div className="item__info">
        <div className="description">
          <Fragment>
            <p>{item?.name}</p>
            <span onClick={handleButtonDeleteClick}>Xóa</span>
          </Fragment>
        </div>
        <div className="price">
          <div>{formatMoney(+(item.salePrice * item.quantity))}</div>
          <div className="price-old">
            {formatMoney(+(item.price * item.quantity))}
          </div>
        </div>
        <Quantity count={item?.quantity} onChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default CartItem;
