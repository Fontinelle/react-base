import { BrowserRouter } from 'react-router-dom';

import history from './services/history';
import Routers from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routers />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
