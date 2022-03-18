import { userConstants } from '../_constants';

export function confirmation(state = {}, action) {
    switch (action.type) {
        case userConstants.CONFIRM_REQUEST:
            return { confrmating: true };
        case userConstants.CONFIRM_SUCCESS:
            return {};
        case userConstants.CONFIRM_FAILURE:
            return {};
        default:
            return state
    }
}