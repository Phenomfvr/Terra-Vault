import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

const CARDS = [
  { title: "LIDO", coin: "ETH", fixed: 4.49, variable: 4.46 },
  { title: "ROCKET", coin: "ETH", fixed: 4.26, variable: 4.2 },
];

const Section5 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">ETH STAKING</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        The base rate of the metaverse. Trade ETH Staking markets on Lido and
        Rocket, all you need is ETH to trade.
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

export default Section5;
