import React from "react";
import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import Btn from "../components/Btn";
import useLoginGoogle from "../hooks/useLoginGoogle";

const Login = () => {
  const { signInWithGoogle } = useLoginGoogle();
  return (
    <Stack
      sx={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/steam-academy-b3423.appspot.com/o/luz-Home.svg?alt=media&token=f84b2609-c471-4d29-94c7-85842610f43d')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
      }}
      height="100vh"
      bgcolor="#09090B"
    >
      <Box
        sx={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/steam-academy-b3423.appspot.com/o/Grid.svg?alt=media&token=e606c5fc-40a9-4c66-93e4-837ba847abc0')",
          height: "18pc",
          backgroundPosition: "top",
        }}
      />
      <Stack
        position="absolute"
        height="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        spacing={7}
      >
        <Stack
          flexDirection="column"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            sx={{
              background: "linear-gradient(135deg, #FFF 0%, #71717A 100%)",
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozTextFillColor: "transparent",
              msTextFillColor: "transparent",
              textFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "3pc",
            }}
          >
            Proyecto de E-com
            <br />
            con React y Mui
          </Typography>
          <Typography color="#A1A1AA" width="60%">
            Este proyecto es un E-Commerce desarrollado con React.js, utilizando
            una variedad de tecnologías y bibliotecas para crear una experiencia
            de usuario fluida y atractiva. El proyecto incluye autenticación,
            una interfaz de usuario para ver y gestionar productos, carrito de
            compras, y un panel de administración.
          </Typography>
          <TextField label="Outlined" variant="outlined" />
          <TextField
            label="Outlined"
            variant="outlined"
            color="primary"
            autoComplete={false}
            placeholder="keyner"
          />
          <TextField label="Custom Theme TextField" variant="outlined" />
          <Btn
            title="Iniciar sesion"
            capitalize={true}
            onclli={() => console.log("helio")}
          />
          <Btn
            title="Continuar con Google"
            capitalize={true}
            onclli={() => signInWithGoogle()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
