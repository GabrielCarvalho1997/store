import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

type Props = {
  children: ReactNode;
};

const ThemeContextType = createContext({} as IThemeContextData);

// Custom Hook

export const AppThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContextType.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContextType.Provider>
  );
};
export const useAppThemeContext = () => useContext(ThemeContextType);
