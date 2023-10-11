import hex from "@/src/utils/hexTransparency";
import { Card, Typography } from "@mui/material";
import React from "react";

type Data = {
  title: string;
  subtitle: string;
  color: string;
};

const PlayersCard: React.FC<Data> = ({
  title,
  subtitle,
  color = "primary.main",
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        p: 3,
        backgroundImage: "none",
        boxShadow: `0 0 88px 0 ${color}${hex["20%"]}`,
        borderRadius: 2,
        border: "1px solid #1c1927",
        bgcolor: "rgba(15,12,29,.4)",
        transition: "0.2s",
        backdropFilter: "blur(8px)",
        "&:hover": {
          transform: "translate(0,-2px)",
          bgcolor: "rgba(15,12,29,.75)",
          boxShadow: `0 0 88px 8px ${color}${hex["30%"]}`,
        },
      }}
    >
      <Typography variant="h5" color={color} sx={{ mb: 2, fontWeight: "bold" }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: 20 }}>{subtitle}</Typography>
    </Card>
  );
};

export default PlayersCard;
