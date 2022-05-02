import React, { useState, useEffect } from "react";
import SideBarUser from "./siderBar/SideBarUser";
import UserInformationForm from "./infoUser";
import "./style.scss";
import Hearder from "../../components/Header";
import Footer from "../../components/Footer";
import Order from "./oder";
import { useParams } from "react-router-dom";
function User(props) {
  const { id } = useParams();
  console.log();
  const [a, setA] = useState("");
  useEffect(() => {
    setA(getTitleHeader());
  }, [id]);
  console.log("id", id);
  console.log("a", id);
  const getTitleHeader = () => {
    switch (id) {
      case "0":
        return "THÔNG TIN TÀI KHOẢN";
      case "1":
        return "QUẢN LÝ ĐƠN HÀNG";
      default:
        return "";
    }
  };
  return (
    <>
      <Hearder />
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
                    <Order />
                  ) : (
                    <div>hihi</div>
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
