import { call, put, take, fork } from "redux-saga/effects";
import * as api from "../api/api";
import * as authLogin from "../actions/AuthLogin";

function* login() {
  while (true) {
    try {
      const { payload } = yield take("LOGIN");
      const httpResponse = yield call(api.callApiLogin, payload);
      console.log("httpResponse", httpResponse);
      yield put({ type: "LOGIN_SUCCESS", httpResponse });
    } catch (error) {
      console.log("error", error);
      yield put(authLogin.requestErrorLogin(error));
    }
  }
}

function* logout() {
  while (true) {
    try {
      yield take("LOGOUT");
      yield call(api.callApiLogout);
      yield put({ type: "LOGOUT_SUCCESS" });    
    } catch (error) {
      yield put({ type: "REQUEST_ERROR_LOGOUT", error });
    }
  }
}

function* loadUsers() {
  while (true) {
    try {
      yield take("LOAD_USERS");
      const httpResponse = yield call(api.callApiLoadUsers);
      yield put({ type: "REQUEST_DATA_USERS_SUCCESS", httpResponse });
    } catch (error) {
      yield put({ type: "REQUEST_ERROR_LOAD_USERS", error });
    }
  }
}

function* createUser() {
  while (true) {
    try {
      const { payload } = yield take("CREATE_USER");
      const httpResponse = yield call(api.callApiCreateUser, payload);
      yield put({ type: "REQUEST_CREATE_USER_SUCCESS", httpResponse });
    } catch (error) {
      yield put({ type: "REQUEST_ERROR_CREATE_USERS", error });
    }
  }
}

export default function* rootSagas() {
  yield fork(login);
  yield fork(logout);
  yield fork(loadUsers);
  yield fork(createUser);
}
