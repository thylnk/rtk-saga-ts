import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  console.log('Hanlde Login ', payload);
}

function* handleLogout() {
  console.log('Handle Logout');
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(
      authActions.login.type
    );
    yield fork(handleLogin, action.payload);
    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  console.log('Auth saga');
  yield fork(watchLoginFlow);
}
