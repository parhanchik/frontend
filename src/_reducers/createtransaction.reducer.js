import { userConstants } from '../_constants';

export function createtransaction(state = {}, action) {
    switch (action.type) {
        case userConstants.CREATE_TRANSACTION_REQUEST:
            return {
            };
        case userConstants.CREATE_TRANSACTION_FAILURE:
            return {

            };
        case userConstants.CREATE_TRANSACTION_SUCCESS:
            return {
                items: action.createtransaction
            };
        default:
            return state
    }
}