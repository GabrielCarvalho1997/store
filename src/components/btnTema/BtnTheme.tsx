import { Button } from '@mui/material';
import { useAppThemeContext } from 'context/themeContext/ThemeContext';

export const BtnTheme = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      {/* Botão para trocar o tema da página */}
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle theme
      </Button>
    </>
  );
};
