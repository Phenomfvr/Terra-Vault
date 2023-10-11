import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Section1 from "@/src/containers/Home/Section1";
import Section2 from "@/src/containers/Home/Section2";
import Section3 from "@/src/containers/Home/Section3";
import { Container, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Bg1 from "@/src/assets/images/bg1.svg";
import Bg2 from "@/src/assets/images/bg2.svg";
import Section4 from "@/src/containers/Home/Section4";
import Section5 from "@/src/containers/Home/Section5";
import Section6 from "@/src/containers/Home/Section6";
import Section7 from "@/src/containers/Home/Section7";
import Section8 from "@/src/containers/Home/Section8";
import Section9 from "@/src/containers/Home/Section9";

const Home = () => {
  return (
    <Box sx={{ pb: 3 }}>
      {/* Navbar */}
      <Navbar />

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Section1 />

        <Section2 />

        <Container maxWidth="lg" sx={{ position: "relative", px: 0 }}>
          <Image
            src={Bg1}
            alt="BG 1"
            style={{
              position: "absolute",
              top: 50,
              width: "650px",
              height: "650px",
              objectFit: "contain",
              zIndex: -1,
            }}
          />

          <Image
            src={Bg2}
            alt="BG 2"
            style={{
              position: "absolute",
              right: 0,
              bottom: 80,
              width: "650px",
              height: "650px",
              objectFit: "contain",
              zIndex: -1,
            }}
          />

          <Section3 />

          <Section4 />

          <Section5 />

          <Section6 />
        </Container>

        <Section7 />

        <Section8 />

        <Section9 />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
