import React from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavBard from "../components/NavBard";
import hero from "../assets/img/image.png";

const Landing = () => {
  return (
    <Stack>
      <NavBard />
      <Stack
        bgcolor="#F0F0F0"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          height: {
            xs: "5pc",
            sm: "4pc",
          },
        }}
      >
        <Typography width="90%">
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status here
        </Typography>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${hero})`,
          height: "23pc",
          width: "95%",
          borderRadius: "2pc",
          marginTop: "1pc",
          alignSelf: "center",
          backgroundPosition: "center",
        }}
        justifyContent="center"
        alignItems="flex-end"
      >
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          width="55%"
          bgcolor="#dededebd"
          padding="0 3pc"
          height="80%"
          sx={{
            borderRadius: "2pc",
          }}
          spacing={1}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "40px",
                md: "60px",
              },
              lineHeight: "1",
            }}
            color="primary"
          >
            Mondongo
          </Typography>
          <Typography>keyner</Typography>
          <Typography
            sx={{
              fontSize: {
                sx: "28px",
                sm: "16px",
              },
            }}
            color="primary"
          >
            Trendy handbags collection for your party animal
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
            }}
          >
            See More
          </Button>
        </Stack>
      </Stack>
      <TextField placeholder="Hello" />
      <Button variant="contained">Login</Button>
    </Stack>
  );
};

export default Landing;
