import { CREATE_PRODUCT, EDIT_PRODUCT } from "../actions/productAction";

const initialState = {
  data: [
    { id: 1, name: "Shirt", minPrice: "500", categoryId: 1 },
    { id: 2, name: "Switch-Cord", minPrice: "150", categoryId: 2 }
    
  ]
};

export default (state = initialState, action) => {
  if (action.type === CREATE_PRODUCT) {
    const data = [...state.data, action.payload];
    return { ...state, data };
  } else if (action.type === EDIT_PRODUCT) {
    const data = [
      ...state.data.filter(e => e.id !== action.payload.id),
      action.payload
    ];
    return { ...state, data };
  } 
  return state;
};
