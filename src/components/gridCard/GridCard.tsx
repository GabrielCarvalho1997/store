import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

export const GridCard = () => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
