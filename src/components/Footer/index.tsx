import { AppBar, Stack, useTheme } from "@mui/material";
import { MenuButton } from "../Navbar";

const Footer = () => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        bgcolor: "background.default",
        top: "auto",
        bottom: 0,
        [theme.breakpoints.up("sm")]: {
          position: "fixed",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "space-evenly", sm: "space-between" }}
        sx={{ px: 3, py: 0.3 }}
      >
        {/* Left */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <MenuButton>DISCORD</MenuButton>

          <MenuButton>TWITTER</MenuButton>

          <MenuButton>INSTAGRAM</MenuButton>
        </Stack>

        {/* Right */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <MenuButton>RULES</MenuButton>

          <MenuButton>T&CS</MenuButton>

          <MenuButton>PRIVACY POLICY</MenuButton>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Footer;
