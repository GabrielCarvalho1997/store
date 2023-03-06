import {useForm} from "react-hook-form";
import { Box, Paper, TextField,Grid, Button, Avatar, Link, FormControlLabel, Checkbox, Typography, CssBaseline } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LayoutLogin from "layouts/LayoutLogin";
import { BtnTheme } from "components/btnTema/BtnTheme";
import { useAuth } from "context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

type FormState = {
    username: string;
    password: string;
}

export const Login = () => {

  const {handleSubmit, register, formState: {errors}} = useForm<FormState>({defaultValues: {username: "mor_2314", password: "83r5^_"}});

  const {signIn} = useAuth();

  const onSubmit = (data: any) => {
    
    signIn(data);

  };

  const location = useLocation();
  const {isAuthenticated} = useAuth();
  const state = location?.state ;
  const fromLocation = state?.from?.pathname ? state.from.pathname : "/home";

  if(isAuthenticated){
    return <Navigate to={fromLocation} state={{ from: location }} replace />;
  }

  return (
 
    <Box>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: "",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            {/* Formulário de Log in */}
            <Box component="form"  noValidate onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
              <TextField
                {...register("username", {required: {value: true, message: "Nome de usuário obrigatorio"}})}
                label={"Nome do usuário *"}
                fullWidth
                sx={{ mb: 2}}
                error={!!errors.username}
                helperText={errors.username?.message}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                {...register("password", {required: {value: true, message: "Senha obrigatoria"}})}
                label={"Senha *"}
                type="password"
                fullWidth
                sx={{ mb: 2}}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputLabelProps={{ shrink: true }}
              />

              {/* Lembrar de dar funcionalidade */}
              <FormControlLabel
                control={<Checkbox value="Lembrar-me" color="primary" />}
                label="Lembrar-me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs >
                  <Box display={"flex"} sx={{justifyContent: "space-between"}}>
                    {/* Lembrar de arrumar aqui p href */}
                    <Link href="#" variant="body2">
                   Esqueceu a senha?
                    </Link>              
                    {/* BOTÃO DE TROCAR O TEMA */}
                    <BtnTheme />
                  </Box>
                </Grid>  
              </Grid>        
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

 
  );
};
