import React from "react";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth.action";

function Register(props) {
  const { setMode } = props;
  const distpatch = useDispatch();
  const handleSubmit = async (values) => {
    console.log("hihi", values);
    const params = {
      fullname: values?.name,
      phone: values?.phone,
      email: values?.email,
      password: values?.phone,
      gender: values?.gender === "nam" || values?.gender === "Nam" ? 1 : 0,
    };
    distpatch(
      register(params, () => {
        setMode("login");
      })
    );
  };
  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
