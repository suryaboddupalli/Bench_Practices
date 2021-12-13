import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getUsers() {
    try {
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({ type: 'GET_USERS_SUCCESS', data: users.data });
    } catch (error) {
        yield put({ type: 'GET_USERS_FAILED', message: error.message });
    }
}

function* getUser({ id }) {
    try {
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/' + id);
        yield put({ type: 'GET_USER_SUCCESS', data: users.data });
    } catch (error) {
        yield put({ type: 'GET_USER_FAILED', message: error.message });
    }
}
function* addUser({ payload }) {
    try {
        let users = yield call(axios.post, 'https://jsonplaceholder.typicode.com/users', payload);
        yield put({ type: 'ADD_USER_SUCCESS', data: users.data });
    } catch (error) {
        yield put({ type: 'ADD_USER_FAILED', message: error.message });
    }
}
function* updateUser({ payload, id }) {
    try {
        let users = yield call(axios.put, 'https://jsonplaceholder.typicode.com/users/' + id, payload);
        yield put({ type: 'UPDATE_USER_SUCCESS', data: users.data });
    } catch (error) {
        yield put({ type: 'UPDATE_USER_FAILED', message: error.message });
    }
}
function* deleteUser({ id }) {
    try {
        let users = yield call(axios.delete, 'https://jsonplaceholder.typicode.com/users/' + id);
        yield put({ type: 'DELETE_USER_SUCCESS', data: id });
    } catch (error) {
        yield put({ type: 'DELETE_USER_FAILED', message: error.message });
    }
}
export function* watchUser() {
    yield all([
        takeLatest('GET_ALL_USERS', getUsers),
        takeLatest('GET_SINGLE_USER', getUser),
        takeLatest('ADD_USER', addUser),
        takeLatest('UPDATE_USER',updateUser),
        takeLatest('DELETE_USER', deleteUser),
    ]);
}
