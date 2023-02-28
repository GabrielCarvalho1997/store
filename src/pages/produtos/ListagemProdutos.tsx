import { Grid } from '@mui/material';
import { GridCard } from 'components/gridCard/GridCard';
import { Produto } from 'types/produtos';

type Props = {
  listaDeProdutos: Produto[];
};

export const ListagemProdutos = ({ listaDeProdutos }: Props) => {
  return (
    <Grid container spacing={4}>
      {listaDeProdutos.map((prod: Produto) => (
        <GridCard key={prod.id} produto={prod} />
      ))}
    </Grid>
  );
};
