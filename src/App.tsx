import Home from './pages/Home/index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { FirstTheme } from 'theme';
import AppRoutes from 'routes';

function App() {
  return (
    <ThemeProvider theme={FirstTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
