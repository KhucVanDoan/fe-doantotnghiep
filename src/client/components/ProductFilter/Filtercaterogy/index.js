import { Box } from "@mui/material";
import { Button, Form, Input, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
function FilterByCategory({ onChange }) {
  const categoryList = [
    {
      id: 1,
      name: "CASIO",
    },
    {
      id: 2,
      name: "CASIO",
    },
    {
      id: 3,
      name: "CASIO",
    },
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const thuonghieu = [
    {
      id: 1,
      name: "hihi",
    },
    {
      id: 2,
      name: "haha",
    },
    {
      id: 3,
      name: "hehe",
    },
  ];
  const handleChange = () => {};
  const { Option } = Select;
  return (
    <div>
      <div>
        <p>Thuương hiệu</p>
        <Select style={{ width: 120 }} onChange={handleChange}>
          <Option value="1">hihi</Option>
        </Select>
      </div>
    </div>
  );
}

export default FilterByCategory;
