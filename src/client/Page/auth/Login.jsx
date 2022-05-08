import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getProfile, login } from "../../redux/actions/auth.action";
import LoginForm from "./LoginForm";

function Login(props) {
  const { setModalIsOpen, changeUser, setChangeUser, setMode } = props;
  const dispatch = useDispatch();
  const handelSubmit = (values) => {
    console.log("vaues", values);
    dispatch(
      login(values, () => {
        toast.success("Đăng nhập thành công");
        setModalIsOpen(false);
        dispatch(
          getProfile(() => {
            setChangeUser(!changeUser);
          })
        );
      })
    );
  };
  return <LoginForm onSubmit={handelSubmit} setMode={setMode} />;
}

export default Login;
