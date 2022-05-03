import React from "react";
import ForgotForm from "./ForgotForm";

function Forgot(props) {
  const { setMode } = props;
  const handelSubmit = (values) => {};
  return <ForgotForm onSubmit={handelSubmit} setMode={setMode} />;
}

export default Forgot;
