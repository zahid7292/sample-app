export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";

export const createCategory = category => {
  return {
    type: CREATE_CATEGORY,
    payload: { ...category, id: new Date().getTime() }
  };
};

export const editCategory = category => {
  return { type: EDIT_CATEGORY, payload: category };
};