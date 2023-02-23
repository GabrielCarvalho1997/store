import { Box } from '@mui/system';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const LayoutBaseDePagina = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
