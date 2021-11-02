import { createStore } from "redux";

const initialState = { counterValue: 0 };

// createStore(reducer, [preloadedState], [enhancer])
// Используем редюсер-болванку const reducer = (state = {}, action) => state
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/Increment":
      return { counterValue: state.counterValue + payload };
    case "counter/Decrement":
      return { counterValue: state.counterValue - payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
