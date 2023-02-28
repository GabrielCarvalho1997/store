import { Box, Paper, TextField, useTheme, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

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
    <Box component={Paper} height={500} padding={2} margin={2}>
      <Box component="form" height={theme.spacing(5)}>
        <TextField
          label={'Título'}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={'Categoria'}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={'Descrição'}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label={'URL da imagem'}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label={'Preço ( R$ )'}
          type="number"
          fullWidth
          sx={{ mb: 2 }}
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
