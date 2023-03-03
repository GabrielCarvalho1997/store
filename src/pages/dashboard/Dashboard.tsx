import { Box, Skeleton, Fab } from '@mui/material';

import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';
import { ListagemProdutos } from 'pages/produtos/ListagemProdutos';
import { useState, useCallback, useEffect } from 'react';
import { Produto } from 'types/produtos';
import { ProdutosService } from 'services/api/axios-config/produtos/ProdutosService';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useParams } from 'react-router-dom';

export const Dashboard = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const params = useParams();

  // Navega até a página de adição
  const handleClick = () => {
    navigate('/adicao');
  };

  // Busca todos os produtos ou por categoria
  const getProdutos = useCallback(() => {
    setLoading(true);
    if (params.categoria) { 
      ProdutosService.getAll(params.categoria)
        .then((res) => {
          if (res instanceof Error) {
            alert(res.message);
          } else {
            setProdutos(res);
          }
        }) .finally(() => setLoading(false));
    } else {
      ProdutosService.getAll()
        .then((res) => {
          if (res instanceof Error) {
            alert(res.message);
          } else {
            setProdutos(res);
          }
        }) .finally(() => setLoading(false));    
    }
  
  }, [params]);

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
        <>
          <Box sx={{ flexGrow: 1, paddingX: 4 }}>
            {produtos && <ListagemProdutos listaDeProdutos={produtos} />}
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              right: 40,
            }}
          >
            <Fab color="primary" aria-label="add" onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Box>
        </>
      )}
    </LayoutBaseDePagina>
  );
};
