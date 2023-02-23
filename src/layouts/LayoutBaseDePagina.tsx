import { Box } from '@mui/system';
import { BtnMenuLateral } from 'components/btnMenuLateral/BtnMenuLateral';
import { ReactNode } from 'react';
import { Typography, useTheme } from '@mui/material';

type Props = {
  children: ReactNode;
  titulo: string;
};

export const LayoutBaseDePagina = ({ children, titulo }: Props) => {
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>
        {/* Botão para mostrar/ocutar o menu lateral  */}
        <BtnMenuLateral />
      </Box>

      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
      >
        <BtnMenuLateral />

        <Typography variant="h5" component="h1">
          {titulo}
        </Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
