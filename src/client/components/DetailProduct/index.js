import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart.action";
import Footer from "../Footer";
import Hearder from "../Header";
import Quantity from "../Quantity";
import "./style.css";
import { useParams } from "react-router";
import { detailItem } from "../../redux/actions/item.action";
import parse from "html-react-parser";
import ImageSlide from "./slideImage";
import { formatMoney } from "../../common/common";
import { Breadcrumbs, Link } from "@mui/material";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.item);
  console.log("productDetail", productDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(detailItem(id));
  }, [id]);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  const handleAddToCartClick = () => {
    const params = {
      images: productDetail?.item?.itemImages[0],
      id: productDetail?.item?.id,
      price: productDetail?.item?.price,
      salePrice: productDetail?.item?.salePrice,
      quantity: quantity,
      stockQuanttity: productDetail?.item?.stockQuantity,
      name: productDetail?.item?.name,
    };
    dispatch(
      addToCart(params, () => {
        setChange(!change);
      })
    );
  };

  return (
    <>
      <Hearder change={change} />
      <div
        style={{
          paddingTop: "20px",
          paddingLeft: "62px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit">
            {productDetail?.item?.category?.name}
          </Link>
          <Link underline="hover" color="inherit">
            {productDetail?.item?.name}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="product_detail">
        <div className="product_left">
          <div style={{ paddingLeft: "68px" }}>
            <ImageSlide imageList={productDetail?.item?.itemImages} />
          </div>
        </div>
        <div className="product_right">
          <h2>{productDetail?.item?.name}</h2>
          <div className="branch">
            <div>Thương hiệu:</div>
            <span>{productDetail?.item?.branch?.name}</span>
          </div>
          <div className="prices">
            <span className="priceOld">
              {formatMoney(productDetail?.item?.price)}
            </span>
            {productDetail?.item?.salePrice > 0 ? (
              <div className="salePrice">
                {formatMoney(productDetail?.item?.salePrice)}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="status">
            <p>Trạng thái:</p>
            <span>
              {productDetail?.item?.stockQuantity > 0 ? "Còn hàng" : "Hết hàng"}
            </span>
          </div>
          <div className="cell">
            <div className="buy__quantity">
              <span>Số Lượng &nbsp;</span>
              <Quantity count={quantity} onChange={handleQuantityChange} />
            </div>
          </div>
          <div onClick={handleAddToCartClick} className="buy__btn">
            <i className="fas fa-shopping-cart"></i>
            <span>Chọn Mua</span>
          </div>
        </div>
        <div className="product_specification">
          <div
            style={{
              border: "1px solid #ebebeb",
              padding: "5px",
              borderRadius: "7px",
            }}
          >
            <h3>Thông tin sản phẩm</h3>
            {productDetail?.item?.specifications?.map((item) => (
              <div className="specification">
                <p className="specification_name">{item?.name}</p>
                <p className="specification_content">{item?.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product_infor">
        <div className="product_description">
          <h3 style={{ marginBottom: "20px" }}>Mô tả sản phẩm</h3>
          <div>{parse(productDetail?.item?.description || "")}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
