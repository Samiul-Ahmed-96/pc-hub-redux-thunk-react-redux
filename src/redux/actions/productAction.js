import {
  ADD_PRODUCT,
  ADD_TO_CART,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  TOGGLE_BRANDS,
  TOGGLE_STOCK
} from "../actionTypes/actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};


export const toggleBrand = (brand) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brand,
  };
};

export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
