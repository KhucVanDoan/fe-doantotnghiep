import { notification } from "antd";
import { toast } from "react-toastify";
import {
  getProfileService,
  loginService,
  registerService,
} from "../../service/auth.service";
import * as types from "../constants";

export const login = (user, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      const response = await loginService(user);
      if (response.statusCode !== 200) {
        toast.error("Đăng nhập thất bại");
      } else {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        dispatch({
          type: types.LOGIN,
          token: response.data.token,
          refreshToken: response.data.refreshToken,
        });
        onSuccess();
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    }
  };
};
export const register = (params, onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await registerService(params);
      if (response.statusCode !== 201) {
        notification.open({
          message: "Đăng ký thất bại.",
          description: response.message,
        });
      } else {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        dispatch({
          type: types.REGISTER,
          token: response.data.token,
          refreshToken: response.data.refreshToken,
        });
        onSuccess();
      }
    } catch (error) {
      notification.open({
        message: "Đăng ký thất bại.",
        description: error?.message || error,
      });
    }
  };
};

export const getProfile = (onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await getProfileService();
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: types.GET_PROFILE,
        user: response?.data,
        onSuccess,
      });
    } catch (error) {
      dispatch({
        type: types.LOGOUT,
      });
    }
  };
};
export const logout = (onSuccess) => {
  return async (dispatch) => {
    dispatch({
      type: types.LOGOUT,
      onSuccess,
    });
  };
};
