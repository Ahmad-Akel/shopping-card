import { PRODUCT_LIST } from "./constants";

export const productData = () => {
  let data = "hello";
  console.log("CALL_PRODUCT_LIST is called", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
