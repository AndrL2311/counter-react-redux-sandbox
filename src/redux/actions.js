export const increment = (value) => {
  return {
    type: "counter/Increment",
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: "counter/Decrement",
    payload: value,
  };
};
