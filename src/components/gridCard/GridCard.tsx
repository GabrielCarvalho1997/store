import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Icon,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProdutosService } from "services/api/axios-config/produtos/ProdutosService";
import { Produto } from "types/produtos";
import { toast } from "react-toastify";
type Props = {
  produto: Produto;
};

export const GridCard = ({ produto }: Props) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/produtos/${produto.id}`);
  };

  const { id } = produto;

  // Exclui o produto porém não atualiza a lista pois é uma base de dados externa
  const handleDelete = () => {
    ProdutosService.deleteById(id).then((res) => {
      if (res instanceof Error) {
        alert(res.message);
      } else {
        console.log(res);
        toast.success("Produto excluído com sucesso!");
        // Gambiarra para atualizar a lista
        navigate("/");
      }
    });
  };

  return (
    <Grid item xs={12} sm={12} md={4} xl={3}>
      <Card>
        <CardActionArea>
          <Box sx={{ padding: 2 }}>
            <CardMedia
              component="img"
              height={250}
              image={produto.image}
              alt={produto.title}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <CardContent>
            <Typography
              component="p"
              fontWeight={800}
              maxWidth={300}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {produto.title}
            </Typography>
            <Typography marginY={1}>
              {produto.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
            <Box display="flex" alignItems="center">
              <Box display="flex" marginRight={1} marginY={0.5}>
                <Icon color="primary">star</Icon>
                <Typography>{produto.rating?.rate}</Typography>
              </Box>
              <Box display="flex" marginRight={1} marginY={0.5}>
                <Icon color="primary">people</Icon>
                <Typography>{produto.rating?.count}</Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        {/* Botões do card */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          marginX={5}
          marginY={2}
        >
          <Button variant="contained" onClick={handleEdit}>
            Editar
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Excluir
          </Button>
        </Stack>
      </Card>
    </Grid>
  );
};
