import { SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.data, data];
    default:
      return data;
  }
};
