import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "../../../components/Quantity";
import "./style.scss";
import { deleteItem } from "../../../redux/actions/cart.action";
import { useDispatch } from "react-redux";
import { formatMoney } from "../../../common/common";
const CartItem = ({ onChange, item, changeCart, setChangeCart }) => {
  const dispatch = useDispatch();
  const handleButtonDeleteClick = () => {
    dispatch(deleteItem(item.id, () => setChangeCart(!changeCart)));
  };
  const handleQuantityChange = (value) => {
    if (!onChange) return;
    onChange(item.id, value);
  };
  return (
    <div className="item">
      <Link to={`/product/`}>
        <img src={item?.images} alt="" />
      </Link>

      <div className="item__info">
        <div className="description">
          <Fragment>
            <p>{item?.name}</p>
            <span onClick={handleButtonDeleteClick}>Xóa</span>
          </Fragment>
        </div>
        <div className="price">
          {formatMoney(+(item.price * item.quantity))}
          {/* {loading ? (
            <Fragment>
              <Skeleton height={20} width={120} />
              <Skeleton height={20} width={90} />
            </Fragment>
          ) : (
            <Fragment>
              <p className='price__new'>
                {isPromo && priceAfterDiscount
                  ? (priceAfterDiscount * item.quantity).toLocaleString(
                      'it-IT',
                      {
                        style: 'currency',
                        currency: 'VND',
                      }
                    )
                  : price * item.quantity
                  ? (price * item.quantity).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })
                  : ''}
                &nbsp;
              </p>
              {product.discount !== 'No' && (
                <span className='price__discount'>-{product.discount}</span>
              )}
              {isPromo && (
                <span className='price__old'>
                  {(price * item.quantity).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                  &nbsp;
                </span>
              )}
            </Fragment> 
          )}*/}
        </div>
        <Quantity count={item?.quantity} onChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default CartItem;
