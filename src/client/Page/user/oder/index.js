import { Modal, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrder } from "../../../redux/actions/order.action";
import { useNavigate } from "react-router-dom";
import { OrderStatus, OrderStatusEnum } from "./order-status.const";
import "./style.css";
import { formatMoney } from "../../../common/common";
const Order = ({ setIdOrder }) => {
  const order = useSelector((state) => state.order);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("order", order);

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(listOrder({ isMy: 1, page: page }));
  }, []);
  console.log("page", page);
  const handleClick = (id) => {
    setIdOrder(id);
    navigate("/user/orderDetail");
  };

  return (
    <>
      <h3 style={{ marginTop: "-20px", marginBottom: "20px" }}>
        Danh sách đơn hàng
      </h3>
      <table>
        <tr>
          <th>Mã đơn hàng</th>
          <th>Tên khách hàng</th>
          <th>Tổng tiền</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        {order?.items?.map((item) => (
          <tr>
            <td>{item?.id}</td>
            <td>{item?.user?.fullname}</td>
            <td>
              {formatMoney(
                (item?.orderDetails?.reduce(
                  (arr, cur) => arr + cur.quantity * cur?.orderPrice,
                  0
                ) *
                  (100 - item?.coupon?.value || 0)) /
                  100
              )}
            </td>
            <td>{OrderStatus[item?.status]}</td>
            <td>
              <p
                onClick={() => handleClick(item?.id)}
                style={{ color: "red", cursor: "pointer" }}
              >
                Xem chi tiết
              </p>
            </td>
          </tr>
        ))}
      </table>
      <div>
        <Pagination
          className="pagination"
          current={page}
          total={order?.meta?.total}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Order;
