import config from 'config';
import { authHeader } from '../_helpers';


export const userService = {
    login,
    logout,
    register,
    confirm,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/v1/auth/sign-in`, requestOptions)
        .then(handleResponse)
        .then(user => {
        //    // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
//
//            return user;
        })
        ;
}

function confirm(username, password, code) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, code })
    };

    return fetch(`${config.apiUrl}/v1/auth/submit-code`, requestOptions)
        .then(handleResponse)
        .then(user => {
            //    // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
//
            return user;
        })
        ;
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(user)
    };


    return fetch(`${config.apiUrl}/v1/auth/sign-up`, requestOptions).then(handleResponse);


/*    const date = new proto.google.protobuf.Timestamp();
    date.fromDate(new Date());

    const pass = new Passport();
    pass.setSeries('4000');
    pass.setNumber('000000');
    pass.setFirstname('Ivan');
    pass.setMiddlename('Ivanovich');
    pass.setLastname('Ivanov');
    pass.setIssuedby('FMS');
    pass.setIssuedat(date);
    pass.setAddress('qqq');
    pass.setBirthplace('SPB');
    pass.setBirthdate(date);
    const req = new SignUpRequest();
    req.setEmail('email@email.com');
    req.setPassword('12345678');
    req.setPassport(pass);
    return client.signUp(req, null, null);
 */
}


function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}