import { Box, Grid } from '@mui/material';
import { GridCard } from 'components/gridCard/GridCard';

type Props = {
  listaDeProdutos: any;
};

export const ListagemProdutos = ({ listaDeProdutos }: Props) => {
  return (
    <Grid container spacing={4}>
      {listaDeProdutos.map((prod: any) => (
        <GridCard key={prod.id} />
      ))}
    </Grid>
  );
};
