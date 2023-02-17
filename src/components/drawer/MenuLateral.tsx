import { ReactNode } from 'react';
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
} from '@mui/material';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useDrawerContext } from 'context/drawerContext/DrawerContext';

type Props = {
  children: ReactNode;
};

export const MenuLateral = ({ children }: Props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
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
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="FakeStore"
              src="#"
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>
          <Divider />

          <Box flex={1}>
            {/* Falta implementar as rotas e adicionar mais opções */}
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DensitySmallIcon />
                </ListItemIcon>
                <ListItemText primary="Categorias" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
