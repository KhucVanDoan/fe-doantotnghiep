import * as types from "../constants";
export const addToCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload,
    });
  };
};
export const updateCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: types.CHANGE_QUANTITY,
      payload,
    });
  };
};
export const deleteItem = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: types.REMOVE_ITEM,
      payload,
    });
  };
};
