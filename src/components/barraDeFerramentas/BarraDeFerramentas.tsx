import { ReactNode } from 'react';
import { Box, TextField, Button, Paper, useTheme, Icon } from '@mui/material';

type Props = {
  children: ReactNode;
};

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  mudarTextoDaBusca?: (novoTexto: string) => void;
}

export const BarraDeFerramentas = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  mudarTextoDaBusca,
}: IBarraDeFerramentasProps) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          fullWidth
          value={textoDaBusca}
          onChange={(e) => mudarTextoDaBusca?.(e.target.value)}
        />
      )}
      <Box display="flex" flex={1} justifyContent="end">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<Icon>search</Icon>}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
};
