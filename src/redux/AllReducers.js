import { combineReducers } from "redux";
import productsReducer from "./prodcuts/reducer";
const AllReducers = combineReducers({
  productsReducer,
});

export default AllReducers;
