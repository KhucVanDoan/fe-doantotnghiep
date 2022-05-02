import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/form-controls/InputField";
import PasswordField from "../../components/form-controls/PasswordField";
import { toast } from "react-toastify";

function LoginForm(props) {
  const { onSubmit } = props;
  const schema = yup.object().shape({
    phone: yup.string().required("Please enter your phone"),
    password: yup.string().required("Please enter your password").min(6),
  });

  const form = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const param = {
      phone: values?.phone.toString(),
      password: values?.password,
    };
    if (!onSubmit) return;
    onSubmit(param);
  };

  return (
    <div className="section-login">
      <h3 className="section-login__title">Đăng Nhập</h3>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          placeholder="Nhập email hoặc số điện thoại"
          name="phone"
          form={form}
          label="Tên tài khoản"
        />
        <PasswordField
          placeholder="Mật khẩu từ 6 đến 32 ký tự"
          name="password"
          form={form}
          label="Mật Khẩu"
        />
        <p className="forget-password">
          Quên mật khẩu? Nhấn vào
          <strong
            onClick={() => {
              toast.warn("Chức năng đang phát triển!");
            }}
          >
            {" "}
            đây
          </strong>
        </p>
        <button className="button-submit" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
