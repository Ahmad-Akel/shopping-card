export const addToCard = (data) => {
  console.log("Action is called", data);
  return {
    type: "ADD_TO_CARD",
    data,
  };
};
