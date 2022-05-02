import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import SideBarUser from "./siderBar/SideBarUser";
import UserInformationForm from "./infoUser";
import "./style.scss";
import Hearder from "../../components/Header";
import Footer from "../../components/Footer";
import Order from "./oder";
function User(props) {
  const { pathname } = useLocation();
  const getTitleHeader = useMemo(() => {
    switch (pathname) {
      case "/user":
        return "THÔNG TIN TÀI KHOẢN";

      case "/user/orderProgress":
        return "QUẢN LÝ ĐƠN HÀNG";

      default:
        return "";
    }
  }, [pathname]);

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
                <div className="user-header">{getTitleHeader}</div>
                <div className="user-content">
                  {pathname === "/user" && <UserInformationForm />}
                  {pathname === "user/orderProgress" && <Order />}
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
