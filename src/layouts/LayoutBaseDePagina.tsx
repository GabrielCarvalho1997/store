import { Box } from '@mui/system';
import { BtnMenuLateral } from 'components/btnMenuLateral/BtnMenuLateral';
import { ReactNode, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BarraDePesquisa } from 'components';
import { useMatch } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  titulo: string;
};

export const LayoutBaseDePagina = ({ children, titulo }: Props) => {
  const [texto, setTexto] = useState('');

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const match = useMatch({ path: 'produtos/:id', end: false });

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
      {!match && (
        <Box marginBottom={4}>
          <BarraDePesquisa
            mostrarInputBusca
            textoBotaoNovo="Pesquisar"
            texto={texto}
            setTexto={setTexto}
          />
        </Box>
      )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
