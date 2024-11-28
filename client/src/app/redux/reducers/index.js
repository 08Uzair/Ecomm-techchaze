import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import blogs from './blogs';
import category from './category'
import inbox from './inbox'
const rootReducer = combineReducers({
  products,
  cart,
  blogs,
  category,
  inbox
});

export default rootReducer;
