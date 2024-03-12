import { Button } from "@mui/material";
import React from "react";

const ButonCuston = ({
  title = "Click",
  capitalize = false,
  Weight = false,
  funtionOnClick = () => console.log("hello"),
}) => {
  return (
    <>
      <Button
        onClick={() => funtionOnClick()}
        sx={{
          textTransform: !capitalize ? "capitalize" : "uppercase",
          fontWeight: Weight ? "bold" : "light",
        }}
      >
        {title}
      </Button>
    </>
  );
};

export default ButonCuston;
