import { ActionTypes } from "../constants/action-types";

// src/redux/actions.js
export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ActionTypes.ADD_TO_CART,
  payload : product,
});

export const setCartItems = (cartItems) => ({
  type: ActionTypes.SET_CART_ITEMS,
  payload: cartItems,
});
export const incrementItemQuantity = (itemId) => {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: itemId,
  };
};

export const decrementItemQuantity = (itemId) => {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: itemId,
  };
};
