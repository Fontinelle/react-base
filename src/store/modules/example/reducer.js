const initialState = {
  buttonClick: false,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.buttonClick = !newState.buttonClick;
      return newState;
    }
    default:
      return state;
  }
}
