import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

const CARDS = [
  { title: "AAVE", coin: "USDC", fixed: 0.38, variable: 1.82 },
  { title: "AAVE", coin: "DAI", fixed: 0.14, variable: 0.87 },
  { title: "COMPOUND", coin: "DAI", fixed: 0.88, variable: 1.1 },
];

const Section4 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">STABLECOIN YIELD</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        Aave and Compound stablecoin markets are the backbone of DeFi. Trade
        fixed and variable rates on these markets today.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {CARDS.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <YieldCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section4;
