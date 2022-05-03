import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "../../../components/form-controls/Button";
import GenderField from "../../../components/form-controls/GenderField";
import InputField from "../../../components/form-controls/InputField";
function UserInformationForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    phone: yup
      .string()
      .required("Please enter your phone number")
      .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Phone number is not valid"),
    gender: yup
      .number()
      .required("Please enter your phone gender")
      .typeError("Please enter your phone gender"),
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.fullname,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
      });
    }
  }, []);
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  const handleCancel = () => {
    form.reset({
      name: user.fullname,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
    });
  };
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="user-information"
    >
      <div className="left">
        <InputField name="name" form={form} label="Họ Tên" />
        <InputField name="email" form={form} label="Email" />
        <InputField name="phone" form={form} label="Số điện thoại" />
        <GenderField name="gender" form={form} label="Giới tính" />
        <div style={{ display: "flex" }}>
          <button
            type="submit"
            style={{
              width: "100px",
              height: "40px",
              marginTop: "20px",
              backgroundColor: "#01adab",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Lưu
          </button>
          <button
            type="submit"
            style={{
              width: "100px",
              height: "40px",
              marginTop: "20px",
              marginLeft: "10px",
              borderRadius: "5px",
            }}
            onClick={handleCancel}
          >
            Huỷ
          </button>
        </div>
      </div>
      <div className="right"></div>
    </form>
  );
}

export default UserInformationForm;
