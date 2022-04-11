import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {
  buttonClick: false,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      toast.success('Sucesso', {
        theme: 'dark',
        autoClose: 800,
        limit: 1,
      });
      const newState = { ...state };
      newState.buttonClick = !newState.buttonClick;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      toast.error('Deu erro', {
        theme: 'dark',
        autoClose: 800,
        limit: 1,
      });
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      toast('Estou fazendo a requisição', {
        theme: 'dark',
        autoClose: 500,
      });
      return state;
    }
    default:
      return state;
  }
}
