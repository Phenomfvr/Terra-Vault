import React from "react";
import { Card, Stack, Avatar, Typography, Button, Box } from "@mui/material";

interface Props {
  title: string;
  coin: string;
  fixed: number;
  variable: number;
}

const YieldCard: React.FC<Props> = ({ title, coin, fixed, variable }) => {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: "rgba(26,21,49,.25)",
        border: "1px solid #1c1927",
        width: "100%",
        backdropFilter: "blur(4px)",
        transition: "all 0.5s ease",
        backgroundImage: "none",
        "&:hover": {
          boxShadow: "0 0 40px 8px rgba(77,229,255,.08)",
          transform: "translate(0,-2px)",
        },
      }}
    >
      <Stack spacing={2}>
        {/* Coin */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ height: 32, width: 32 }} />

          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", letterSpacing: "1.2px" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="primary.light">
              {coin}
            </Typography>
          </Box>
        </Stack>

        {/* Rates */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="body2">FIXED RATE</Typography>
            <Typography variant="h6" color="info.light">
              {fixed}%
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2">VARIABLE RATE</Typography>
            <Typography variant="h6" color="info.dark">
              {variable}%
            </Typography>
          </Box>
        </Stack>

        <Button
          variant="contained"
          sx={(theme) => ({
            width: "fit-content",
            bgcolor: "secondary.main",
            border: `1px solid ${theme.palette.secondary.main}`,
            color: "#4de5ff",
            height: 30,
            px: 2.5,
            fontSize: 16,
            "&:hover": {
              borderColor: "#4de5ff",
              bgcolor: "secondary.main",
            },
          })}
        >
          TRADE
        </Button>
      </Stack>
    </Card>
  );
};

export default YieldCard;
