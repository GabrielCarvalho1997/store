import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';
import { AppThemeProvider } from 'context/themeContext/ThemeContext';
import { MenuLateral } from 'components';
import { DrawerProvider } from 'context/drawerContext/DrawerContext';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
