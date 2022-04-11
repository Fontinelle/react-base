import * as types from '../types';

export function buttonClickSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}
export function buttonClickRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
export function buttonClickFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
