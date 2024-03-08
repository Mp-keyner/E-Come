import { Box, Button } from "@mui/material";
import React, { useState } from "react";
interface BtnProps {
  title: string;
  capitalize: boolean;
  width: string;
  onclli: any;
}
const Btn = ({ title, capitalize, width, onclli }: BtnProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "3pc",
      }}
    >
      <Button
        color="primary"
        onClick={() => onclli()}
        sx={{
          textTransform: capitalize ? "capitalize" : "uppercase",
        }}
      >
        {title}
      </Button>
      <Box
        sx={{
          position: "absolute",
          bottom: "5px",
          width: "101.91px",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(255, 0, 0, 0.00) 0%, rgba(255, 0, 0, 0.90) 50%, rgba(255, 0, 0, 0.00) 100%)",
        }}
      ></Box>
    </Box>
  );
};

export default Btn;
