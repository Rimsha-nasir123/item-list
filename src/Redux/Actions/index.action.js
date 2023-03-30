export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decNumber = (num) => ({
  type: "DECREMENT",
  payload: num,
});
export const addItem = (text) => ({
  type: "ADD_ITEM",
  payload: {
    name : text
  }
});
export const delItem = (item) => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
