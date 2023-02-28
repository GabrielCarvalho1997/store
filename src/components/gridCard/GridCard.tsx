import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Icon,
} from '@mui/material';
import { Produto } from 'types/produtos';
type Props = {
  produto: Produto;
};

export const GridCard = ({ produto }: Props) => {
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
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <CardContent>
            <Typography
              component="p"
              fontWeight={800}
              maxWidth={300}
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {produto.title}
            </Typography>

            <Typography marginY={1}>
              {produto.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
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
          {/* COLOCAR OS BOTÕES */}
        </CardActionArea>
      </Card>
    </Grid>
  );
};
