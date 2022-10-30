export const cartData = (data = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      console.warn("ADD_TO_CARD condtition", action);
      return [action.data, ...data];
    case "REMOVE_FROM_CARD":
      console.warn("REMOVE_FROM_CARD condtition", action);
      data.length = data.length > 0 ? data.length - 1 : [];
      return [...data];
    case "EMPTY_CARD":
      console.warn("EMPTY_CARD condtition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
