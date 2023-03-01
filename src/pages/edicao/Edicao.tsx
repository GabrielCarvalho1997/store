import { EditForm } from 'components/editForm/EditForm';
import { LayoutBaseDePagina } from 'layouts/LayoutBaseDePagina';

export const Edicao = () => {
  return (
    <LayoutBaseDePagina titulo="Edite o produto">
      <EditForm />
    </LayoutBaseDePagina>
  );
};
