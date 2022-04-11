import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

const requeste = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requeste);
    yield put(actions.buttonClickSuccess());
  } catch {
    yield put(actions.buttonClickFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
