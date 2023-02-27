import { Grid } from '@mui/material';
import { GridCard } from 'components/gridCard/GridCard';
import { Produto } from 'types/produtos';

type Props = {
  listaDeProdutos: Produto[];
};

export const ListagemProdutos = ({ listaDeProdutos }: Props) => {
  console.log(listaDeProdutos);
  return (
    <Grid container spacing={4}>
      {listaDeProdutos.map((prod: Produto) => (
        <GridCard
          key={prod.id}
          category={prod.category}
          description={prod.description}
          id={prod.id}
          image={prod.image}
          price={prod.price}
          title={prod.title}
          rating={prod.rating}
        />
      ))}
    </Grid>
  );
};
