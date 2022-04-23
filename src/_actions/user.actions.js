import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    confirm,
    register,
    getAll,
    delete: _delete,
    create_bill,
    //get_bill,
    getAll_bill,
    create_transaction,
    get_transaction
};


function create_bill(currency , limit, name) {
    return (dispatch) => {
        dispatch(request({ currency , limit, name }));

        userService.create_bill(currency , limit, name)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.CREATE_BILL_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATE_BILL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATE_BILL_FAILURE, error } }
}

function get_bill(id) {
    return dispatch => {
        dispatch(request({ id }));

        userService.get_bill(id)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.GET_BILL_REQUEST, user } }
    function success(user) { return { type: userConstants.GET_BILL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_BILL_FAILURE, error } }
}

function getAll_bill() {
    return (dispatch) => {
        dispatch(request());

        userService.getAll_bill()
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.GETALL_BILL_REQUEST } }
    function success(user) { return { type: userConstants.GETALL_BILL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETALL_BILL_FAILURE, error } }
}

function create_transaction() {
    return dispatch => {
        dispatch(request({  }));

        userService.create_transaction()
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.CREATE_TRANSACTION_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATE_TRANSACTION_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATE_TRANSACTION_FAILURE, error } }
}

function get_transaction(accountID , payee ,amount) {
    return dispatch => {
        dispatch(request({ accountID , payee ,amount }));

        userService.get_transaction(accountID , payee ,amount)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.GET_TRANSACTION_REQUEST, user } }
    function success(user) { return { type: userConstants.GET_TRANSACTION_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_TRANSACTION_FAILURE, error } }
}





function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    //dispatch(success(user));
                    //history.push('/confirm');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function confirm(username, password, code) {
    return dispatch => {
        dispatch(request({ username }));

        userService.confirm(username, password, code)
            .then(
                user => {
                    dispatch(success(user));

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
        history.push('/');
    };

    function request(user) { return { type: userConstants.CONFIRM_REQUEST, user } }
    function success(user) { return { type: userConstants.CONFIRM_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CONFIRM_FAILURE, error } }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
            ;
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}