import sidebar from "./sidebar";
import product from "./product";
import auth from "./auth";
import currentProduct from "./currentProduct";
import { createStore, combineReducers } from "redux";
const reducers = {
  sidebar,
  currentProduct,
  product,
  auth,
};
export default createStore(combineReducers(reducers));
