const { PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS, PRODUCT_GET_ERROR } = require("./action")

let initialState = {
    product: [],
    isLoading: false,
    isError: true
}

let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GET_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case PRODUCT_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                isError: false
            }
        }
        case PRODUCT_GET_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default productReducer