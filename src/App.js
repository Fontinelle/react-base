import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
