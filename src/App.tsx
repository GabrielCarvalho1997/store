import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";
import { AppThemeProvider } from "context/themeContext/ThemeContext";
import { DrawerProvider } from "context/drawerContext/DrawerContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "context/authContext/AuthContext";
import ConfigProvider from "context/ConfigContext/ConfigContext";

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <ToastContainer />
          <ConfigProvider>
            <AuthProvider>
              <AppRoutes />
              {/* componente do backdrop */}
            </AuthProvider>
          </ConfigProvider>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
