import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
