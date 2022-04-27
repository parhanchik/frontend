import { userConstants } from '../_constants';

export function gettransaction(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_TRANSACTION_REQUEST:
            return {
            };
        case userConstants.GET_TRANSACTION_FAILURE:
            return {

            };
        case userConstants.GET_TRANSACTION_SUCCESS:
            return {
                items: action.gettransaction
            };
        default:
            return state
    }
}