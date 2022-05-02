import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function UserLocationForm(props) {
  const { codeSale } = props;
  const history = useNavigate();
  const products = useSelector((state) => state.cart);
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập họ tên"),
    email: yup.string().required("Vui lòng nhập email"),
    phone: yup.string().required("Vui lòng nhập số điện thoại"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
  });

  const form = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const params = {
      fullname: values?.name,
      phone: values?.phone,
      address: values?.address,
      email: values?.email,
      note: values?.note,
      gender: 0,
      couponId: codeSale,
      items: products?.cartItem?.map((item) => ({
        itemRuleId: item.id,
        quantity: item.quantity,
      })),
    };
    console.log("aa", params);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="user-location">
      <InputField name="name" form={form} label="Họ tên" />
      <InputField name="email" form={form} label="Email" />
      <InputField name="phone" form={form} label="Số điện thoại" />
      <InputField name="address" form={form} label="Địa chỉ" />
      <InputField name="note" form={form} label="Ghi chú" />
      <div style={{ display: "flex" }}>
        <button
          type="submit"
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "#01adab",
            borderRadius: "10px",
          }}
        >
          Đặt hàng
        </button>
        <button
          style={{
            width: "100px",
            height: "40px",
            marginLeft: "10px",
            borderRadius: "10px",
          }}
          onClick={() => history(-1)}
        >
          Quay lại
        </button>
      </div>
    </form>
  );
}

export default UserLocationForm;
