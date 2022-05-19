import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/form-controls/InputField";

function TakeOtp(props) {
  const { setMode } = props;
  const schema = yup.object().shape({
    phone: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
  });

  const form = useForm({
    defaultValues: {
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const handelSubmit = (values) => {
    console.log("aa");
    setMode("FORGOTPASSWORD");
  };
  return (
    <div className="section-login">
      <h3 className="section-login__title">Quên mật khẩu</h3>
      <form onSubmit={form.handleSubmit(handelSubmit)}>
        <InputField
          placeholder="Nhập số điện thoại"
          name="phone"
          form={form}
          label="Số điện thoại"
        />
        <button className="button-submit" type="submit">
          Lấy mã OTP
        </button>
      </form>
    </div>
  );
}

export default TakeOtp;
