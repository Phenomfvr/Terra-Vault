import MainButton from "@/src/components/buttons/MainButton";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
  useTheme
} from "@mui/material";
import Image from "next/image";
import Logo from "src/assets/images/WhatsApp Image 2023-10-10 at 14.13.22.jpg";


const NeonBox = styled(Box)(({ theme }) => ({
  mt: 10,
  position: "absolute",
  height: 300,
  width: 400,
  border: "3px solid #000",
  borderColor: "#004e95",
  boxShadow:
    "inset -1px -1px 20px 0 rgba(255,74,169,.3), 2px 2px 20px 0 rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px 0 rgba(0,78,149,.42)",
  borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
  transformStyle: "preserve-3d",
  willChange: "transform, opacity",
  transition: "all 0.3s ease",
  zIndex: -1,
  [theme.breakpoints.up("sm")]: {
    mt: 6,
    height: 350,
    width: 600,
  },
  [theme.breakpoints.up("md")]: {
    height: 400,
    width: 720,
  },
  [theme.breakpoints.up("lg")]: {
    mt: 8,
    height: 440,
    width: 800,
  },
}));

const Section2 = () => {
  const theme = useTheme();
  const scrollPosition = useScrollPosition();

  return (
    <Container
      sx={{
        height: "60vh",
        mb: 20,
        [theme.breakpoints.up("sm")]: {
          height: "80vh",
          mb: 30,
        },
      }}
    >
      {/* Content */}
      <Stack
        sx={{ height: "100%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={Logo}
          alt="Terra Vault Logo"
          style={{ width: "100%", height: 250, objectFit: "contain" }}
        />

        <Typography variant="h5" sx={{ mt: -10, mb: 5 }}>
          
        </Typography>

        <MainButton>PRESS FOR DEMO</MainButton>

        {/* Neon Boxes */}
        {scrollPosition < 700 && (
          <>
            <NeonBox
              sx={{
                opacity: 1 - scrollPosition / 600,
                transform: `translate3d(-32px, 8px, 0px) scale3d(${
                  0.0065 * scrollPosition + 1
                }, ${
                  0.0065 * scrollPosition + 1
                }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
                  0.215 * scrollPosition + -163
                }deg) skew(0deg, 0deg)`,
              }}
            />

            <NeonBox
              sx={{
                opacity: 1 - scrollPosition / 600,
                transform: `translate3d(16px, -8px, 0px) scale3d(${
                  0.0065 * scrollPosition + 1
                }, ${
                  0.0065 * scrollPosition + 1
                }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
                  -0.18 * scrollPosition + 17
                }deg) skew(0deg, 0deg)`,
              }}
            />

            <NeonBox
              sx={{
                opacity: 1 - scrollPosition / 600,
                transform: `translate3d(-8px, 0px, 0px) scale3d(${
                  0.0065 * scrollPosition + 1
                }, ${
                  0.0065 * scrollPosition + 1
                }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
                  -0.215 * scrollPosition + 17
                }deg) skew(0deg, 0deg)`,
                borderImage:
                  "linear-gradient(to right, #3966FF, #FF599C, #FBC13A) 1",
                borderColor: "#ff4aa9",
              }}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Section2;
