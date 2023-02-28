import { Box } from '@mui/system';
import { BtnMenuLateral } from 'components/btnMenuLateral/BtnMenuLateral';
import { ReactNode } from 'react';
import { Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
  children: ReactNode;
  titulo: string;
  barraDePesquisa: ReactNode;
};

export const LayoutBaseDePagina = ({
  children,
  titulo,
  barraDePesquisa,
}: Props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

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
        gap={1}
        height={theme.spacing(sm ? 6 : md ? 8 : 12)}
      >
        <BtnMenuLateral />

        <Typography
          variant={sm ? 'h5' : md ? 'h4' : 'h3'}
          component="h1"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDePesquisa && <Box>{barraDePesquisa}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
