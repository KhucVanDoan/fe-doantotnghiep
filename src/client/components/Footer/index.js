import { Link } from "react-router-dom";

import expressIcon from "../../assets/img/express-icon.svg";
import mailIcon from "../../assets/img/mail-icon.svg";
import percentIcon from "../../assets/img/percent-icon.svg";
import phoneIcon from "../../assets/img/phone-icon.svg";
import transactionIcon from "../../assets/img/transaction-icon.svg";
import gift from "../../assets/img/gift-icon.svg";
import "./style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__commit">
        <div className="commit__block percent">
          <img src={percentIcon} alt="percent logo" />
          <p>Sản phẩm chính hãng</p>
        </div>
        <div className="commit__block express">
          <img src={expressIcon} alt="express logo" />
          <p>Giao hàng toàn quốc</p>
        </div>
        <div className="commit__block transaction">
          <img src={transactionIcon} alt="transaction logo" />
          <p>Thanh toán linh hoạt</p>
        </div>
        <div className="commit__block present">
          <img src={gift} alt="gift logo" />
          <p>Tích điểm đổi quà</p>
        </div>
      </div>
      <div className="footer__contact">
        <div className="container">
          <div className="wrap">
            <div className="contact__item phone">
              <Link to="/" className="item__detail">
                <img src={phoneIcon} alt="phone logo" />
                <p>
                  Gọi ngay <strong>1800 6768</strong> (tư vấn miễn phí)
                </p>
              </Link>
            </div>
            <div className="contact__item input">
              <form className="item__form" method="get">
                <button type="submit">
                  <img src={mailIcon} alt="mail logo" />
                </button>
                <input
                  type="text"
                  placeholder="Nhập email để nhận mã giảm giá"
                  required=""
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer__info">
        <div className="info__content">
          <div className="content__locate">
            {/* <img src={phanoLinkLogoColor} alt="brand color logo" /> */}
            <div className="locate__address">
              <p>ĐỒNG HỒ</p>
              <p>Địa chỉ:HIHI</p>
            </div>
            <div className="locate__contact">
              <p>MST: 0304860663</p>
              <p>Email: @gmail.com</p>
              <p>Tel: 0379 339 693</p>
            </div>
          </div>
          <div className="content__assist">
            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="assist__list">
              <li>
                <Link to="/">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="/">Chính sách giao hàng</Link>
              </li>
              <li>
                <Link to="/">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to="/">Hướng dẫn thanh toán</Link>
              </li>
              <li>
                <Link to="/">Hướng dẫn đặt hàng</Link>
              </li>
              <li>
                <Link to="/">Giải quyết phản hồi</Link>
              </li>
              <li>
                <Link to="/">Giấy phép kinh doanh</Link>
              </li>
            </ul>
          </div>
          <div className="content__account">
            <h4>TÀI KHOẢN</h4>
            <ul className="account__list">
              <li>
                <Link
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   const action = openModal();
                  //   dispatch(action);
                  // }}
                  to="/"
                >
                  Đăng ký
                </Link>
              </li>
              <li>
                <Link
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   const action = openModal();
                  //   dispatch(action);
                  // }}
                  to="/"
                >
                  Đăng nhập
                </Link>
              </li>
              <li>
                <Link
                  //   onClick={(e) => {
                  //     if (!user) {
                  //       e.preventDefault();
                  //       toast.warn("Vui lòng đăng nhập!");
                  //       const action = openModal();
                  //       dispatch(action);
                  //     }
                  //   }
                  // }
                  to="/user/order?page=1&with=address,order_details.product.images&perPage=6"
                >
                  Kiểm tra đơn hàng
                </Link>
              </li>
            </ul>
          </div>
          <div className="content__social">
            <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <div className="social__list">
              <Link to="/">
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link to="/">
                <i class="fa-brands fa-google"></i>
              </Link>
              <Link to="/">
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="info__license">
          <p>
            <span>© 2022</span> - Bản quyền thuộc về Khúc Văn Đoàn
          </p>
          {/* <img src={bctIcon} alt="BCT logo" /> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
