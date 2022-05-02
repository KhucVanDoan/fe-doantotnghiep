import React, { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart.action";
import Footer from "../Footer";
import Hearder from "../Header";
import Quantity from "../Quantity";
import { toast } from "react-toastify";
import "./style.scss";
import { useParams } from "react-router";
const DetailProduct = () => {
  const [products, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = {
    id: id,
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KXVKRSTm6y4Xh7aA2alE6ZFnEfVgGXDzKw&usqp=CAU",
    name: "hihi",
    category: {
      name: "đồng hồ",
    },
    content: "đồng hồ đẹp",
    price: "12000",
  };
  const [loading, setloading] = useState(false);
  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  const handleAddToCartClick = () => {
    const params = {
      images: product?.images,
      id: product.id,
      price: product.price,
      quantity: quantity,
      name: product.name,
    };
    dispatch(addToCart(params));
  };

  return (
    <>
      <Hearder />
      <div className="product-detail-page">
        <div className="container">
          <div className="product-detail-page__content">
            <div className="product-detail-page__thumbnail">
              <div className="thumbnail-main">
                {loading ? (
                  <Skeleton height={420} width={350} />
                ) : (
                  <img src={product.images} alt="" />
                )}
              </div>
              <div className="list">
                {/* {loading ? (
                <Skeleton count={3} height={50} width={50} />
              ) : (
                <Fragment>
                  <img src={product.images[0].url || ""} alt="" />
                  <img src={product.images[0].url || ""} alt="" />
                  <img src={product.images[0].url || ""} alt="" />
                </Fragment>
              )} */}
              </div>
            </div>
            <div className="product-detail-page__info">
              {loading ? (
                <Skeleton
                  height={26}
                  width={"95%"}
                  style={{ margin: "0 20px" }}
                />
              ) : (
                <p className="short-desc">{product.name}</p>
              )}
              <div className="trademark">
                {loading ? (
                  <Skeleton
                    height={26}
                    width={184}
                    style={{ margin: "0 20px" }}
                  />
                ) : (
                  <p>
                    Danh Mục Sản phẩm: &nbsp;
                    <span>{product.category.name}</span>
                  </p>
                )}

                {loading ? (
                  <Skeleton height={26} width={150} />
                ) : (
                  <p>Mã SP: {product.id}</p>
                )}
              </div>
              <div className="info-detail">
                {loading ? (
                  <Skeleton height={75} width={"95%"} />
                ) : (
                  <p>{product?.content}</p>
                )}
              </div>
              <div className="main-info">
                {loading ? (
                  <Fragment>
                    <Skeleton height={24} width={150} />
                    <Skeleton height={24} width={150} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <p className="price">
                      Giá: &nbsp;
                      <span>{product?.price}</span>
                      {/* <span>
                    {isPromo && priceAfterDiscount
                      ? priceAfterDiscount.toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })
                      : price
                      ? price.toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })
                      : ''}
                  </span> */}
                    </p>
                    {/* {isPromo && (
                  <p className='price'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                      style={{
                        textDecoration: 'line-through',
                        opacity: '0.4',
                      }}
                    >
                      {price.toLocaleString('it-IT', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </span>
                  </p>
                )} */}
                  </Fragment>
                )}
                {loading ? (
                  <Skeleton height={22} width={130} />
                ) : (
                  <p className="status">
                    Tình trạng:&nbsp; <span>Còn Hàng</span>
                  </p>
                )}

                {loading ? (
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    height={50}
                    width={"90%"}
                  />
                ) : (
                  <div className="buy">
                    <div className="buy__quantity">
                      <span>Số Lượng &nbsp;</span>
                      <Quantity
                        count={quantity}
                        onChange={handleQuantityChange}
                      />
                    </div>
                    <div onClick={handleAddToCartClick} className="buy__btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span>Chọn Mua</span>
                    </div>
                    {/* {isFavorite ? (
                  <divs
                    onClick={handleDeleteFavorite}
                    style={{ marginLeft: '10px' }}
                    className='buy__btn heart'
                  >
                    <i className='fas fa-heart-broken'></i>
                    <span>Xóa Yêu Thích</span>
                  </divs>
                ) : (
                  <div
                    onClick={handleFavoriteClick}
                    style={{ marginLeft: '10px' }}
                    className='buy__btn heart'
                  >
                    <i className='fas fa-heart'></i>
                    <span>Yêu Thích</span>
                  </div>
                )} */}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="content-info">
            {loading ? (
              <Skeleton style={{ margin: "10px" }} height={30} width={"20%"} />
            ) : (
              <h4>Thông tin sản phẩm</h4>
            )}

            {loading ? (
              <Skeleton style={{ margin: "10px" }} height={300} width={"95%"} />
            ) : (
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
