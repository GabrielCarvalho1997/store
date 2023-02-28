import { Box, TextField, useTheme, Button, Card } from '@mui/material';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

type FormState = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export const EditForm = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormState>();

  return (
    <Box component={Card} padding={2} margin={2} height={520}>
      <Box component="form" height={theme.spacing(5)}>
        <TextField
          label={'Título'}
          fullWidth
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={'Categoria'}
          fullWidth
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={'Descrição'}
          fullWidth
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label={'URL da imagem'}
          fullWidth
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label={'Preço ( R$ )'}
          type="number"
          fullWidth
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Editar
        </Button>
      </Box>
    </Box>
  );
};
