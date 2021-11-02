import { combineReducers } from "redux";
import actionTypes from "./counter-types";
console.log(actionTypes.INCREMENT);
const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReduser = (state = 1, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReduser,
});

export default counterReducer;
