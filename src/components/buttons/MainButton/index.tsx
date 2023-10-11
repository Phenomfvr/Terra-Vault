import { Button, ButtonProps } from "@mui/material";
import React from "react";

const MainButton: React.FC<ButtonProps> = ({
  children,
  sx = {},
  size = "normal",
  ...props
}) => {
  return (
    <Button
      variant="text"
      sx={(theme) => ({
        // lineHeight: "18px",
        bgcolor: "#1c1927",
        border: "1px solid #1c1927",
        borderRadius: 2,
        px: "20px",
        py: "6px",
        fontSize: size == "small" ? 14 : "inherit",
        fontWeight: "bold",
        ":hover": {
          bgcolor: "#1c1927",
          filter: theme.custom.customShadow2,
          border: "1px solid #3b2c34",
          color: "primary.main",
        },
        ...sx,
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MainButton;
