import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';
import { AppThemeProvider } from 'context/themeContext/ThemeContext';
import { MenuLateral } from 'components';
import { DrawerProvider } from 'context/drawerContext/DrawerContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <ToastContainer />
          <MenuLateral>
            <AppRoutes />
            {/* componente do backdrop */}
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
