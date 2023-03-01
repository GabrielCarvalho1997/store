import { AddForm } from 'components/addForm/AddForm';
import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';

export const Adicao = () => {
  return (
    <LayoutBaseDePagina titulo="Adicione um novo produto">
      <AddForm />
    </LayoutBaseDePagina>
  );
};
