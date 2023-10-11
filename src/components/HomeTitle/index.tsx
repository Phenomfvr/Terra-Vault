import React from "react";
import { Stack, Typography, StackProps, useTheme } from "@mui/material";

const HomeTitle: React.FC<StackProps> = ({ children, color, sx = {} }) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        px: 2,
        pb: "2px",
        borderBottom: `1px solid ${color || theme.palette.primary.light}`,
        width: "fit-content",
        letterSpacing: "0.5px",
        ...sx,
      }}
      alignItems="center"
    >
      <Typography variant="body2" sx={{ alignItems: "center" }}>
        {children}
      </Typography>
    </Stack>
  );
};

export default HomeTitle;
