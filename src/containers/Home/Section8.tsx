import DoorImg1 from "@/src/assets/images/sec8_door1.svg";
import DoorImg2 from "@/src/assets/images/sec8_door2.svg";
import DoorImg3 from "@/src/assets/images/sec8_door3.svg";
import DoorImg4 from "@/src/assets/images/sec8_door4.svg";
import HomeTitle from "@/src/components/HomeTitle";
import { MenuButton } from "@/src/components/Navbar";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

const StyledDoor = styled(Image)({
  position: "absolute",
  zIndex: -1,
  willChange: "transform",
});

const Section8 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition(containerRef);
  const theme = useTheme();

  return (
    <Container ref={containerRef} maxWidth="md" sx={{ mt: 15 }}>
      <Stack alignItems="center" sx={{ textAlign: "center", mb: 5 }}>
        <HomeTitle sx={{ mb: 1.5 }} color={theme.palette.primary.contrastText}>
          THE PLAYGROUND
        </HomeTitle>

        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Build on Voltz
        </Typography>

        <Typography
          sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
          color="text.secondary"
        >
          Join a growing community of hackers, innovators and developers
          building on Voltz. Join us, let's make a dent in the defi universe.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1, sm: 3, md: 5, lg: 8 }}
      >
        <MenuButton sx={{ fontSize: 16 }}>DEVELOPER DOCS</MenuButton>

        <MenuButton sx={{ fontSize: 16 }}>VOLTZ DOCS</MenuButton>
      </Stack>

      {/* Doors BG */}
      <Box
        sx={{
          mt: -6,
          backgroundImage:
            "linear-gradient(180deg,rgba(15,12,29,0) 80%,#0f0c1d)",
          position: "relative",
          height: 400,
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* 1 */}
        <StyledDoor
          src={DoorImg1}
          alt="Door Image 1"
          sx={{
            left: { xs: "6%", sm: "12%", md: "22%" },
            top: "52%",
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, ${Math.min(
              20,
              Math.max(0, (600 - scrollPosition) / 30)
            )}deg)`,
          }}
        />

        {/* 2 */}
        <StyledDoor
          src={DoorImg2}
          alt="Door Image 2"
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              objectFit: "contain",
            },
            left: { sm: "8%", md: "27%" },
            top: "29%",
            transform: `translate3d(0px, -${Math.min(
              50,
              Math.max(0, (600 - scrollPosition) / 15)
            )}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        />

        {/* 3 */}
        <StyledDoor
          src={DoorImg3}
          alt="Door Image 3"
          sx={{
            left: { xs: "17%", sm: "20%", md: "35%" },
            top: "43%",
            transform: `translate3d(-${Math.min(
              50,
              Math.max(0, (600 - scrollPosition) / 30)
            )}px, -${Math.min(
              50,
              Math.max(0, (600 - scrollPosition) / 40)
            )}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        />

        {/* 4 */}
        <StyledDoor
          src={DoorImg4}
          alt="Door Image 4"
          sx={{
            left: { xs: "20%", sm: "25%", md: "44%" },
            top: "36%",
            transform: `translate3d(${Math.min(
              50,
              Math.max(0, (600 - scrollPosition) / 15)
            )}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        />
      </Box>
    </Container>
  );
};

export default Section8;
