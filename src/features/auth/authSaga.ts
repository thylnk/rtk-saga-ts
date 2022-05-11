import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    console.log('Hanlde Login ', payload);
    yield delay(1000);
    localStorage.setItem('access_token', 'abcdef');
    // login sucess and dispatch authActions
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Khanh Thy',
      })
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message()));
  }
  // redirect to admin page
}

function* handleLogout() {
  yield delay(1000);
  console.log('Handle Logout');
  localStorage.removeItem('access_token');
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    console.log('Watch login');

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }
    console.log('waiting dispatch logout');
    yield take(authActions.logout.type);
    console.log('waiting handleLogout');
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  console.log('Auth saga');
  yield fork(watchLoginFlow);
}
