import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';
import { AppThemeProvider } from 'context/themeContext';
import { MenuLateral } from 'components';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
