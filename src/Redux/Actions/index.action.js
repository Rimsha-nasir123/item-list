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
export const addItem = (id) => ({
  type: "ADD_ITEM",
  payload: {
    name: id,
  },
});
export const delItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      id: id,
    },
  };
};
