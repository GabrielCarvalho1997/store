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

export const GridCard = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Produto) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <Box sx={{ padding: 2 }}>
            <CardMedia
              component="img"
              height={250}
              image={image}
              alt={title}
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
              {title}
            </Typography>

            <Typography marginY={1}>
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Typography>
            <Box display="flex" alignItems="center">
              <Box display="flex" marginRight={1} marginY={0.5}>
                <Icon color="primary">star</Icon>
                <Typography>{rating?.rate}</Typography>
              </Box>
              <Box display="flex" marginRight={1} marginY={0.5}>
                <Icon color="primary">people</Icon>
                <Typography>{rating?.count}</Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
