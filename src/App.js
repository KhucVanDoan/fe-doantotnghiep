import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import DetailProduct from "./client/components/DetailProduct";
import NotFound from "./client/components/NotFound";
import Cart from "./client/Page/Cart";
import CartLocationConfirm from "./client/Page/Cart/cartLocation";
import DoubleWatch from "./client/Page/DoubleWatch";
import HomePage from "./client/Page/Homepage";
import MenWatch from "./client/Page/MenPage";
import User from "./client/Page/user";
import UserInformationForm from "./client/Page/user/infoUser";
import WomenWatch from "./client/Page/WomenWatch";
import { useStore } from "./client/redux/store";

function App(props) {
  const store = useStore(props.initialReduxState);
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dong-ho-nam" element={<MenWatch />} />
          <Route path="/dong-ho-nu" element={<WomenWatch />} />
          <Route path="/dong-ho-doi" element={<DoubleWatch />} />
          <Route path="/product/:id/detail" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<CartLocationConfirm />} />
          <Route path="/user" element={<User />} />
          <Route element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
