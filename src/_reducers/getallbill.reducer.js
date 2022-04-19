import { userConstants } from '../_constants';

export function getallbill(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_BILL_REQUEST:
            return {
            };
        case userConstants.GETALL_BILL_FAILURE:
            return {
            };
        case userConstants.GETALL_BILL_SUCCESS:
            return {};
        default:
            return state
    }
}