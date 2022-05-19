import { notification } from "antd";
import {
  create,
  detail,
  list,
  remove,
  review,
  update,
} from "../../service/item.service";
import * as types from "../constants";

export const listItem = (query) => {
  return async (dispatch) => {
    try {
      const response = await list(query);
      dispatch({
        type: types.LIST_ITEM,
        data: response.data,
      });
    } catch (error) {
      console.log(error?.message || error);
      notification.open({
        message: "Thất bại",
        description: error?.message || error,
      });
    }
  };
};

export const createItem = (data, cb) => {
  return async (dispatch) => {
    try {
      const form = new FormData();
      form.append("name", data.name);
      form.append("description", data.description);
      form.append("branchId", data.branchId);
      form.append("categoryId", data.categoryId);
      form.append("itemRules", JSON.stringify(data.itemRules));
      data.images.fileList.forEach((e) => {
        form.append("images", e.originFileObj);
      });
      const response = await create(form);

      if (response.statusCode !== 201) {
        notification.open({
          message: "Thất bại",
          description: response.message,
        });
      } else {
        notification.open({
          message: "Thành công",
          description: response.message,
        });
        cb();
      }
    } catch (error) {
      console.log(error?.message || error);
      notification.open({
        message: "Thất bại",
        description: error?.message || error,
      });
    }
  };
};

export const updateItem = (id, data, cb) => {
  return async (dispatch) => {
    try {
      console.log("data.images.fileList", data.images.fileList);
      const form = new FormData();
      form.append("name", data.name);
      form.append("description", data.description);
      form.append("branchId", data.branchId);
      form.append("categoryId", data.categoryId);
      form.append("itemRules", JSON.stringify(data.itemRules));
      const keepImages = [];
      data.images.fileList.forEach((e) => {
        if (e.originFileObj) form.append("images", e.originFileObj);
        else keepImages.push(e.name);
      });
      form.append("keepImages", keepImages);

      const response = await update(id, form);

      if (response.statusCode !== 200) {
        notification.open({
          message: "Thất bại",
          description: response.message,
        });
      } else {
        notification.open({
          message: "Thành công",
          description: response.message,
        });
        cb();
      }
    } catch (error) {
      console.log(error?.message || error);
      notification.open({
        message: "Thất bại",
        description: error?.message || error,
      });
    }
  };
};

export const deleteItem = (id, cb) => {
  return async (dispatch) => {
    try {
      const response = await remove(id);

      if (response.statusCode !== 200) {
        notification.open({
          message: "Thất bại",
          description: response.message,
        });
      } else {
        notification.open({
          message: "Thành công",
          description: response.message,
        });
        cb();
      }
    } catch (error) {
      console.log(error?.message || error);
      notification.open({
        message: "Thất bại",
        description: error?.message || error,
      });
    }
  };
};

export const detailItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await detail(id);
      dispatch({
        type: types.DETAIL_ITEM,
        data: response.data,
      });
    } catch (error) {
      console.log(error?.message || error);
      notification.open({
        message: "Thất bại",
        description: error?.message || error,
      });
    }
  };
};
export const reviewItem = (params, onSuccess, onError) => {
  return async (dispatch) => {
    const response = await review(params);
    onSuccess();
    onError();
  };
};
