import Home from './pages/Home/index';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'routes';
import { AppThemeProvider } from 'context/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
