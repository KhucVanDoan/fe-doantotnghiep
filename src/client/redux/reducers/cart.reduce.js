import * as types from "../constants";

const initialState = {
  cartItem: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const newItem = action.payload;
      const item = state.cartItem.findIndex((x) => x.id === newItem.id);
      if (item >= 0) {
        state.cartItem[item].quantity += newItem.quantity;
      } else {
        state.cartItem.push(newItem);
      }
      // localStorage.setItem("CART", JSON.stringify(state.cartItem));
      return { ...state };
    }
    case types.CHANGE_QUANTITY: {
      const { id, quantity } = action.payload;
      console.log("value", id, quantity);
      const item = state.cartItem.findIndex((x) => x.id === id);
      if (item >= 0) {
        state.cartItem[item].quantity = quantity;
      }
      // localStorage.setItem("CART", JSON.stringify(state.cartItem));
      return { ...state };
    }
    case types.REMOVE_ITEM: {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== id);
      // localStorage.setItem("CART", JSON.stringify(state.cartItem));
      return { ...state };
    }

    default:
      return state;
  }
};

export default cartReducer;
