import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';

// components
import Container from "./Components/Container";

// styles
import GlobalStyles from './styles/Global';
import { theme } from './styles/Theme';

function App() {
  return <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  </Router>;
}

export default App;
