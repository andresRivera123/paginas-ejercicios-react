import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

export default function NavbarRestaurant() {
  const [openMenu, setOpenMenu] = useState(false);
  const menu = ['', 'Account', 'Dashboard', 'Logout'];

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu(){
    setOpenMenu(false);
  }
  return (
    <AppBar position="static" sx={{ background: "#ca6702" }}>
      <Container maxWidth={"xl"}>
        <Toolbar
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: "0.7rem",
          }}
        >
          <RestaurantIcon />
          <Typography ml={2} letterSpacing=".3rem" my={1} textAlign={"center"}>
            Parador El Viajero
          </Typography>
          <Box>
            <Tooltip title="Abrir menu">
              <IconButton size="large" onClick={handleOpenMenu}>
                <ReorderIcon sx={{ color: "#fff" }} />
              </IconButton>

            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
