import sidebar from "./sidebar";
import product from "./product";
import { createStore, combineReducers } from "redux";
const reducers = {
  sidebar: sidebar,
  product: product,
};
export default createStore(combineReducers(reducers));
