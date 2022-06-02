import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';

// styles
import GlobalStyles from './styles/Global';
import { theme } from './styles/Theme';

function App() {
  return <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Routes />
      </div>
    </ThemeProvider>
  </Router>;
}

export default App;
