import DehazeIcon from "@mui/icons-material/Dehaze";
import { IconButton, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDrawerContext } from "context/drawerContext/DrawerContext";

export const BtnMenuLateral = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      {/* Botão para mostrar/ocutar o menu lateral */}
      {sm && (
        <IconButton
          // color="primary"
          onClick={toggleDrawerOpen}
        >
          <DehazeIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    </>
  );
};
