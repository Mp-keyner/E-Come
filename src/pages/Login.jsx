import React from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Btn from "../components/Btn";
import useLoginGoogle from "../hooks/useLoginGoogle";
import ButonCuston from "../components/ButonCuston";
import useForm from "../hooks/UseFrom";
import NavBard from "../components/NavBard";
import hero from "../assets/img/image.png";
import axios from "axios";

const Login = () => {
  const { signInWithGoogle } = useLoginGoogle();
  const { onChangeInfo, form, email, resetForm } = useForm({
    email: "",
    password: "",
  });
  const AddLoginUser = async (e) => {
    localStorage.setItem("user", JSON.stringify(e));
    const respuesta = await axios.get('http://localhost:3000/allproducts')
    console.log(respuesta)
  };
  return (
    <Stack alignItems="center" justifyContent="center">
      <NavBard />
      <Stack
        bgcolor="#F0F0F0"
        height="3pc"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Typography>
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status here
        </Typography>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${hero})`,
          height: "20pc",
          width: "95%",
          borderRadius: "2pc",
          marginTop: "1pc",
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
              fontSize: "60px",
              lineHeight: "1",
            }}
            color="primary"
          >
            Login Pages
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
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
            onClick={() => signInWithGoogle()}
          >
            See More
          </Button>
        </Stack>
      </Stack>
      <TextField
        placeholder="Hello"
        onChange={({ target: { value } }) => onChangeInfo(value, "email")}
        value={email}
      />
      <Button
        variant="contained"
        onClick={() => {
          AddLoginUser(form);
          resetForm();
        }}
      >
        Login
      </Button>
    </Stack>
  );
};

export default Login;
