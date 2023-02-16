import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[600],
      light: cyan[400],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#94B2D6',
    },
  },
});
