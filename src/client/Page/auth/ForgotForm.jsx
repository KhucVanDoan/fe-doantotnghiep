import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputField from "../../components/form-controls/InputField";
import PasswordField from "../../components/form-controls/PasswordField";
function ForgotForm(props) {
  const { setMode } = props;
  const schema = yup.object().shape({
    otp: yup.string().nullable().required("Please enter your otp").min(6),
    new_password: yup
      .string()
      .required("Please enter your new password")
      .min(6),

    new_password_confirmation: yup
      .string()
      .required("Please retype your new password")
      .min(6)
      .oneOf([yup.ref("new_password")], "New password does not match"),
  });
  const form = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handelSubmit = (values) => {
    setMode("login");
  };
  return (
    <div className="section-login">
      <h3 className="section-login__title">Lấy lại Mật khẩu</h3>
      <form onSubmit={form.handleSubmit(handelSubmit)}>
        <InputField
          name="otp"
          form={form}
          label="Mã OTP"
          placeholder="mã otp"
        />
        <PasswordField
          name="new_password"
          form={form}
          label="Mật khẩu mới"
          placeholder="Mật khẩu từ 6 đến 32 ký tự"
        />
        <PasswordField
          name="new_password_confirmation"
          form={form}
          label="Xác nhận mật khẩu mới"
          placeholder="Mật khẩu từ 6 đến 32 ký tự"
        />
        <button className="button-submit" type="submit">
          Lưu
        </button>
      </form>
    </div>
  );
}

export default ForgotForm;
