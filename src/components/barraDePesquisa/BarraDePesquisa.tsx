// import { ReactNode } from 'react';
import { Box, TextField, Button, Paper, useTheme, Icon } from '@mui/material';

// type Props = {
//   children: ReactNode;
// };

type IBarraDePesquisaProps = {
  texto: string;
  setTexto: (texto: string) => void;
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  clicarEmNovo?: () => void;
};

export const BarraDePesquisa = ({
  mostrarInputBusca = false,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  clicarEmNovo,
  texto,
  setTexto,
}: IBarraDePesquisaProps) => {
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
          value={texto}
          placeholder="Pesquisar... LEMBRAR DE USAR O USEDEBOUNCE AQUI"
          fullWidth
          onChange={(e) => {
            setTexto(e.target.value);
          }}
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
