import { ReactNode } from 'react';
import { Box, TextField, Button, Paper, useTheme, Icon } from '@mui/material';

type Props = {
  children: ReactNode;
};

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  mudarTextoDaBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  clicarEmNovo?: () => void;
}

export const BarraDeFerramentas = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  mudarTextoDaBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  clicarEmNovo,
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
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={clicarEmNovo}
            endIcon={<Icon>search</Icon>}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
