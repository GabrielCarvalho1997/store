import { BarraDeFerramentas } from 'components';
import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={
        <BarraDeFerramentas mostrarInputBusca textoBotaoNovo="Pesquisar" />
      }
    >
      Testando
    </LayoutBaseDePagina>
  );
};
