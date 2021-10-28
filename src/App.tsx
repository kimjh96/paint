import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Pages
import Index from 'pages/index';

// Theme
import { theme } from 'src/theme';
import GlobalStyle from 'src/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/" component={Index} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
