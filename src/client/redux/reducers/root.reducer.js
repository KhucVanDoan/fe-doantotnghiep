import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reduce";
import categoryReducer from "./category.reducer";
import colorReducer from "./color.reducer";
import couponReducer from "./coupon.reducer";
import itemReducer from "./item.reducer";
import orderReducer from "./order.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  color: colorReducer,
  coupon: couponReducer,
  item: itemReducer,
  order: orderReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
