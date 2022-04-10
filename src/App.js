import { BrowserRouter as Router } from 'react-router-dom';

// import history from './services/history';
import Routers from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Header />
      <Routers />
      <GlobalStyles />
    </Router>
  );
}

export default App;
