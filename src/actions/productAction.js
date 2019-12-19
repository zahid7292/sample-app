export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"

export const creatProduct = product => {
    return {
        type: CREATE_PRODUCT,
        payload: { ...product, id: new Date().getTime() }
    }
}

export const editProduct = product => {
    return { 
        type: EDIT_PRODUCT, 
        payload: product 
    }
}
