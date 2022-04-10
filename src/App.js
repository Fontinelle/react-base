import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import Routers from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter history={history}>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routers />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
