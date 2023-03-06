import { ReactNode, useState } from "react";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Collapse
} from "@mui/material";
import { Box } from "@mui/system";
import Icon from "@mui/material/Icon";
import {ExpandLess, ExpandMore } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from "@mui/icons-material/Home";
import { useDrawerContext } from "context/drawerContext/DrawerContext";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { BtnTheme } from "components/btnTema/BtnTheme";


type Props = {
  children: ReactNode;
};

// Componente de opções do menu lateral
interface IListItemLink {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink = ({ to, icon, label, onClick }: IListItemLink) => {
  const navigate = useNavigate();

  // reconhece se alguma opção do menu está selecionada
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral = ({ children }: Props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box sx={{ padding: "10px" }}>
              <Avatar
                alt="FakeStore"
                src="#"
                sx={{ height: theme.spacing(16), width: theme.spacing(16) }}
              />
            </Box>
            <Box margin="10px" display="flex" flexDirection="column">
              {/* TROCAR O BOTÃO */}
              <BtnTheme />
            </Box>
          </Box>

          <Divider />

          <Box flex={1}>

            {/* Item de página inicial */}
            <ListItemButton onClick= {() => navigate("/home")} >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Página Inicial" />
            </ListItemButton>
            
            {/* Item de categorias com as categorias dinâmicas */}
            <ListItemButton onClick={handleToggle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Categoria" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit sx={{background: "#DCDCDC", }}>
              <List component="div" disablePadding>
                { drawerOptions && drawerOptions.map((Options) => 
                  (
                    <ListItemLink
                      key={Options.path}
                      label={Options.label}
                      icon={Options.icon}
                      to={Options.path}
                      onClick={smDown ? toggleDrawerOpen : undefined}
                    />
                    
                  ))
                }
              </List>
            </Collapse>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
