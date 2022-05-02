import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getProfile, login } from "../../redux/actions/auth.action";
import LoginForm from "./LoginForm";

function Login(props) {
  const { setModalIsOpen } = props;
  const dispatch = useDispatch();
  const handelSubmit = (values) => {
    dispatch(
      login(values, () => {
        toast.success("Đăng nhập thành công")
        setModalIsOpen(false);
        dispatch(getProfile());
      })
    );
  };
  return <LoginForm onSubmit={handelSubmit} />;
}

export default Login;
