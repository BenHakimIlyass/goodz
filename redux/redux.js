import sidebar from "./sidebar";
import product from "./product";
import auth from "./auth";
import cart from "./cart";
import favourite from "./favourite";
import currentProduct from "./currentProduct";
import { createStore, combineReducers } from "redux";
const reducers = {
  sidebar,
  cart,
  currentProduct,
  product,
  favourite,
  auth,
};
export default createStore(combineReducers(reducers));
