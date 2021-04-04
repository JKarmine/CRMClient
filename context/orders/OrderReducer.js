import {
    SELECT_CLIENT,
    SELECT_PRODUCT,
    PRODUCTS_AMOUNT
} from '../../types/';

const OrderReducer = (state, action) => {
    switch (action.type) {
        case SELECT_CLIENT:
            return {
                ...state,
                client: action.payload
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

export default OrderReducer;