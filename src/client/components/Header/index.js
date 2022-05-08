import Modal from "react-modal/lib/components/Modal";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/img/user-icon.svg";
import ModalAuth from "../../Page/auth/ModalAuth";
import "./style.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { isEmpty } from "lodash";
import { notification } from "antd";
Hearder.propTypes = {};
function Hearder(props) {
  const [inputSearch, setInputSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [count, setCount] = useState([]);
  const { change, changeCart, changeInfo } = props;
  const [changeUser, setChangeUser] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [changeUser, changeInfo]);

  const handleSubmit = () => {};
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputSearch(inputValue);
  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log("aa");
    setCount(JSON.parse(localStorage.getItem("CART")));
  }, [change, changeCart]);
  const countQuantity = count?.reduce((arr, cur) => arr + cur.quantity, 0);
  const handleLoginLogout = () => {
    if (isEmpty(user)) {
      setModalIsOpen(true);
    } else {
      dispatch(
        logout(() => {
          window.location.href = "/";
        })
      );
    }
  };
  const handleUser = () => {
    if (!isEmpty(user)) {
      navigate("/user/0");
    } else {
      notification.open({
        message: "Vui lòng đăng nhập",
        description: "",
      });
    }
  };
  return (
    <Fragment>
      <header>
        <Link to="/">
          <img
            src="https://xwatch.vn/images/config/logo-xwatch-216-62_1616143160.png
              "
            alt=""
            style={{ marginLeft: "20px", marginTop: "-16px" }}
          />
        </Link>
        <div className="header container">
          <div className="header__search">
            <form onSubmit={handleSubmit} className="header__search-main">
              <input
                onChange={handleInputChange}
                value={inputSearch}
                type="text"
                placeholder="Tìm kiếm..."
              />
              <button type="submit">
                <i className="fas fa-search"></i>
                <span>Tìm kiếm</span>
              </button>
            </form>
            <div className="header__search-product">
              <div className="menu">
                <div onClick={() => navigate("/")}>TRANG CHỦ</div>
                <div onClick={() => navigate("/dong-ho-nam")}>ĐỒNG HỒ NAM</div>
                <div onClick={() => navigate("/dong-ho-nu")}>ĐỒNG HỒ NỮ</div>
                <div onClick={() => navigate("/dong-ho-doi")}>ĐỒNG HỒ ĐÔI</div>
                <div>GIỚI THIỆU</div>
                <div>LIÊN HỆ</div>
              </div>
            </div>
          </div>
          <div className="header__cart" onClick={() => navigate("/cart")}>
            <span className="cart__noti-number">{countQuantity || 0}</span>
            <i className="fas fa-shopping-cart"></i>
            <p>Giỏ hàng</p>
          </div>
          <div className="header__user">
            <img src={userIcon} alt="user logo" />

            <div className="user-log">
              <div onClick={handleLoginLogout}>
                {isEmpty(user) ? "Đăng Nhập" : "Đăng Xuất"}
              </div>
              <div onClick={handleUser}>
                {isEmpty(user) ? "Tài khoản" : user?.fullname}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            zIndex: "1000",
            position: "fixed",
            inset: "0",
            background: "rgba(0, 0, 0, 0.53)",
            cursor: "poiter",
          },
          content: {
            position: "absolute",
            top: "5%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            border: "none",
            background: "rgb(255, 255, 255)",
            overflow: "unset",
            borderRadius: "4px",
            outline: "none",
            padding: "0",
            transform: "translateX(-50%)",
          },
        }}
      >
        <ModalAuth
          setModalIsOpen={setModalIsOpen}
          changeUser={changeUser}
          setChangeUser={setChangeUser}
        />
      </Modal>
    </Fragment>
  );
}

export default Hearder;
