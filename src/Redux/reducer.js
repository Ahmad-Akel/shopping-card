import { ADD_TO_CARD } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      console.warn("ADD_TO_CARD condtition", action);
      return [action.data, ...data];

    default:
      return [];
  }
};
