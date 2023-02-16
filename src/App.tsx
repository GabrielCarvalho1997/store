import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from 'context/themeContext';
import AppRoutes from 'routes';

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
