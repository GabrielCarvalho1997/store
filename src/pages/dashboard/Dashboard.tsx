import { Box, Skeleton } from '@mui/material';

import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';
import { ListagemProdutos } from 'pages/produtos/ListagemProdutos';
import { useState, useCallback, useEffect } from 'react';
import { Produto } from 'types/produtos';
import { ProdutosService } from 'services/api/axios-config/produtos/ProdutosService';

export const Dashboard = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProdutos = useCallback(() => {
    setLoading(true);
    ProdutosService.getAll()
      .then((res) => {
        if (res instanceof Error) {
          alert(res.message);
        } else {
          setProdutos(res);
          console.log(res);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getProdutos();
  }, [getProdutos]);

  return (
    <LayoutBaseDePagina titulo="Fake Store">
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="95%"
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
        <Box sx={{ flexGrow: 1, paddingX: 4 }}>
          {produtos && <ListagemProdutos listaDeProdutos={produtos} />}
        </Box>
      )}
    </LayoutBaseDePagina>
  );
};
