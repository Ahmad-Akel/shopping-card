import { PRODUCT_LIST } from "./constants";

export const productData = () => {
  let data = "Hello";
  console.log("CALL_PRODUCT_LIST is called", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
