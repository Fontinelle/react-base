import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';
import Routers from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <ToastContainer autoClose={3000} />
        <Header />
        <Routers />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
