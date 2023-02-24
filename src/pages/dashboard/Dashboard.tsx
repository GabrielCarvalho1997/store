import { Box, Skeleton } from '@mui/material';
import { BarraDePesquisa } from 'components';
import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';

type Props = {
  loading: boolean;
};

export const Dashboard = ({ loading }: Props) => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDePesquisa={
        <BarraDePesquisa mostrarInputBusca textoBotaoNovo="Pesquisar" />
      }
    >
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={'100%'}
          margin={2}
        >
          <Skeleton
            height="100%"
            width="100%"
            variant="rounded"
            animation="wave"
          />
        </Box>
      ) : (
        'Testando'
      )}
    </LayoutBaseDePagina>
  );
};
