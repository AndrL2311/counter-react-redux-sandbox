import { createStore } from "redux";

const initialState = {};

// Используем редюсер-болванку
const reducer = (state = initialState, action) => state;

const store = createStore(reducer);

export default store;
