import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
