import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#003892",
      dark: "#001e3c",
      light: "#0062ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[600],
      light: cyan[400],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});


