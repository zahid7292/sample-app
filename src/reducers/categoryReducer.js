import { CREATE_CATEGORY, EDIT_CATEGORY } from "../actions/categoryAction";

const initialState = {
  data: [
    { id: 1, name: "Fashion", desc: "Abc" },
    { id: 2, name: "Electronics", desc: "Def" }
  ]
};
export default (state = initialState, action) => {
  if (action.type === CREATE_CATEGORY) {
    return { ...state, data: [...state.data, action.payload] };
  } else if (action.type === EDIT_CATEGORY) {
    const data = [
      ...state.data.filter(e => e.id !== action.payload.id),
      action.payload
    ];
    return { ...state, data };

  }

  return state;
};