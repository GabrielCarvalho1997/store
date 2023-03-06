import { Box, TextField, Button, Paper } from "@mui/material";
import { ProdutosService } from "services/api/axios-config/produtos/ProdutosService";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Produto } from "types/produtos";
import { toast } from "react-toastify";

type FormState = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export const AddForm = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    const temp: Produto = {
      id: parseInt(id || "0"),
      title: data.title,
      category: data.category,
      description: data.description,
      image: data.image,
      price: data.price,
    };
    addProduto(temp);
  };

  // Adiciona um novo produto
  const addProduto = (dados: Produto) => {
    ProdutosService.create(dados).then((res) => {
      if (res instanceof Error) {
        alert(res.message);
      } else {
        console.log(res);
        toast.success("Produto adicionado com sucesso!");
        navigate("/");
      }
    });
  };

  return (
    <Box component={Paper} padding={2} margin={2}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={"Título"}
          fullWidth
          sx={{ my: 2 }}
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register("title", {
            required: { value: true, message: "Campo obrigatório" },
          })}
        />
        <TextField
          label={"Categoria"}
          fullWidth
          sx={{ my: 2 }}
          error={!!errors.category}
          helperText={errors.category?.message}
          {...register("category", {
            required: { value: true, message: "Campo obrigatório" },
          })}
        />
        <TextField
          label={"Descrição"}
          fullWidth
          sx={{ my: 2 }}
          error={!!errors.description}
          helperText={errors.description?.message}
          {...register("description", {
            required: { value: true, message: "Campo obrigatório" },
          })}
        />

        <TextField
          label={"URL da imagem"}
          fullWidth
          sx={{ my: 2 }}
          error={!!errors.image}
          helperText={errors.image?.message}
          {...register("image", {
            required: { value: true, message: "Campo obrigatório" },
          })}
        />

        <TextField
          label={"Preço ( R$ )"}
          type="text"
          fullWidth
          sx={{ my: 2 }}
          error={!!errors.price}
          helperText={errors.price?.message}
          InputLabelProps={{ shrink: true }}
          {...register("price", {
            required: { value: true, message: "Campo obrigatório" },
          })}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};
