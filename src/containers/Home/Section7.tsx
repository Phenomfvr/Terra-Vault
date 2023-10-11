import DoorImg from "@/src/assets/images/sec7_door.svg";
import HomeTitle from "@/src/components/HomeTitle";
import { MenuButton } from "@/src/components/Navbar";
import PlayersCard from "@/src/components/cards/PlayersCard";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

const CARDS = [
  {
    title: "FIX TAKERS",
    subtitle:
      "Trading rates for fixed returns? Convert any asset with a variable rate into a fixed rate product.",
  },
  {
    title: "LIQUIDITY PROVIDER",
    subtitle:
      "Liquidity to invest? Deposit within your tick range, collect returns.",
  },
  {
    title: "VARIABLE TAKERS",
    subtitle:
      "Trading variable rates with leverage? Take variable, take alpha.",
  },
];

const DOORS = [
  {
    left: { xs: "5%", sm: "10%", md: "22%" },
    top: "52%",
  },
  { left: { xs: "12%", sm: "18%", md: "31%" }, top: "72%" },
  { left: { xs: "20%", sm: "25%", md: "35%" }, top: "45%" },
  { left: { xs: "30%", sm: "33%", md: "42%" }, top: "38%" },
  { left: { xs: "40%", sm: "43%", md: "52%" }, top: "51%" },
  { left: { xs: "47%", sm: "49%", md: "59%" }, top: "83%" },
  { left: { xs: "54%", sm: "58%", md: "64%" }, top: "60%" },
];

const StyledDoor = styled(Image)<{ skew: number }>(({ skew }) => ({
  position: "absolute",
  zIndex: -1,
  willChange: "transform",
  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, ${skew}deg)`,
}));

const Section7 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition(containerRef);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const COLORS: any = {
    0: theme.palette.secondary.light,
    1: theme.palette.primary.main,
    2: theme.palette.primary.contrastText,
  };

  return (
    <Container
      ref={containerRef}
      sx={{ maxWidth: "1080px!important", mt: { xs: 25, md: 35 }, pb: 15 }}
    >
      <Stack
        alignItems="center"
        sx={{ textAlign: "center", mb: { xs: 5, md: 12 } }}
      >
        <HomeTitle sx={{ mb: 1.5 }} color={theme.palette.secondary.light}>
          THE PLAYERS
        </HomeTitle>

        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Trade Rates Like a Pro
        </Typography>

        <Typography
          sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
          color="text.secondary"
        >
          Voltz is foundational defi infrastructure, unlocking waves of
          composable, community-led opportunities for builders, innovators and
          creators.
        </Typography>
      </Stack>

      <Grid container spacing={{ xs: 3, md: 6 }}>
        {CARDS.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ zIndex: 1 }}>
            <PlayersCard color={COLORS[i]} {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Doors BG */}
      <Box
        sx={{
          mt: -35,
          backgroundImage:
            "linear-gradient(180deg,rgba(15,12,29,0) 40%,#0f0c1d)",
          position: "relative",
          height: 400,
          overflow: "hidden",
        }}
      >
        {DOORS.map((door, i) => (
          <StyledDoor
            src={DoorImg}
            alt="Door Image"
            skew={Math.min(
              0,
              Math.max(-50, (scrollPosition - 400) / 15 + (isMobile ? 25 : 0))
            )}
            key={i}
            sx={{
              ...door,
            }}
          />
        ))}
      </Box>

      <Stack alignItems="center">
        <MenuButton sx={{ fontSize: 16 }}>
          LEARN MORE ABOUT HOW THE PROTOCOL WORKS
        </MenuButton>
      </Stack>
    </Container>
  );
};

export default Section7;
