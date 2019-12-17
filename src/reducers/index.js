import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

export default combineReducers({
  category: categoryReducer,
  product: productReducer
});

//final state
// const state = {
//   category: {
//     data: [
//       { id: 1, name: "Fashion" },
//       { id: 2, name: "Electronics" }
//     ]
//   },
//   product: {
//     data: []
//   }
// };
