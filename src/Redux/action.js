import { ADD_TO_CARD, REMOVE_FROM_CARD, EMPTY_CARD } from "./constants";

export const addToCard = (data) => {
  console.log("Action is called", data);
  return {
    type: ADD_TO_CARD,
    data,
  };
};

export const removeFromCard = (data) => {
  console.log("Action is called", data);
  return {
    type: REMOVE_FROM_CARD,
    data,
  };
};

export const emptyCard = (data) => {
  console.log("Action is called", data);
  return {
    type: EMPTY_CARD,
    data,
  };
};
