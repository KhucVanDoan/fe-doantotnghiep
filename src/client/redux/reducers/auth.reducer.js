import * as types from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
      };
    case types.REGISTER:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
      };
    case types.GET_PROFILE:
      action.onSuccess();
      return {
        ...state,
        user: action.user,
      };
    case types.LOGOUT:
      localStorage.clear();
      action.onSuccess();
      return {
        token: null,
        refreshToken: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
