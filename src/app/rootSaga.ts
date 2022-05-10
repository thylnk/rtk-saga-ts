import { PayloadAction } from '@reduxjs/toolkit';
import { all, takeEvery } from 'redux-saga/effects';

export function* log(action: PayloadAction) {
  console.log(action);
}

function* helloSaga() {
  console.log('Hello Saga');
  yield takeEvery('*', log);
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([helloSaga()]);
}
