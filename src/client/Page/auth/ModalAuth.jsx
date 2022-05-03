import React, { useState } from "react";
import TakeOtp from "./TakeOTP";
import Forgot from "./ForgotPassword";
import Login from "./Login";
import "./modal-auth.scss";
import Register from "./Register";
export const MODE = {
  LOGIN: "login",
  REGISTER: "register",
  OTP: "OTP",
  FORGOTPASSWORD: "FORGOTPASSWORD",
};
function ModalAuth({ setModalIsOpen, changeUser, setChangeUser }) {
  const [mode, setMode] = useState(MODE.LOGIN);

  return (
    <div className="modal-auth">
      <div onClick={() => setModalIsOpen(false)} className="time-close">
        X
      </div>
      <div className="header">
        <div
          onClick={() => setMode(MODE.LOGIN)}
          className={`header__left ${mode === MODE.LOGIN ? "active" : ""}`}
        >
          <h4>ĐĂNG NHẬP</h4>
        </div>
        <div
          onClick={() => setMode(MODE.REGISTER)}
          className={`header__right ${mode === MODE.REGISTER ? "active" : ""}`}
        >
          <h4>ĐĂNG KÝ</h4>
        </div>
      </div>
      <div className="content">
        {mode === MODE.LOGIN ? (
          <Login
            setModalIsOpen={setModalIsOpen}
            changeUser={changeUser}
            setChangeUser={setChangeUser}
            setMode={setMode}
          />
        ) : mode === MODE.REGISTER ? (
          <Register setMode={setMode} />
        ) : mode === MODE.OTP ? (
          <TakeOtp setMode={setMode} />
        ) : (
          <Forgot setMode={setMode} />
        )}
      </div>
    </div>
  );
}

export default ModalAuth;
