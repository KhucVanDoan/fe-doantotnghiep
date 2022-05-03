import React, { useState, useEffect } from "react";
import SideBarUser from "./siderBar/SideBarUser";
import UserInformationForm from "./infoUser";
import "./style.scss";
import Hearder from "../../components/Header";
import Footer from "../../components/Footer";
import Order from "./oder";
import { useParams } from "react-router-dom";
import ChangePassWord from "./changePassword";
import { Breadcrumb } from "antd";
function User(props) {
  const { id } = useParams();
  const [a, setA] = useState("");
  useEffect(() => {
    setA(getTitleHeader());
  }, [id]);
  const getTitleHeader = () => {
    switch (id) {
      case "0":
        return "THÔNG TIN TÀI KHOẢN";
      case "1":
        return "THAY ĐỔI MẬT KHẨU";
      case "2":
        return "QUẢN LÝ ĐƠN HÀNG";
      default:
        return "";
    }
  };
  return (
    <>
      <Hearder />
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="">User</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="user">
        <div className="container">
          <div className="user__content">
            <div className="user__left">
              <SideBarUser />
            </div>
            <div className="user__right">
              <div className="user-main">
                <div className="user-header">{a}</div>
                <div className="user-content">
                  {id === "0" ? (
                    <UserInformationForm />
                  ) : id === "1" ? (
                    <ChangePassWord />
                  ) : (
                    <Order />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;
