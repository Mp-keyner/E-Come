import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavBard from "../components/NavBard";
import hero from "../assets/img/image.png";
import RecipeReviewCard from "../components/Card";
import UseProduct from "../hooks/UseProduct";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Goku from "../assets/img/goku.png";

const Landing = () => {
  const navigate = useNavigate();
  const { GetAllProducts, data } = UseProduct();
  const [pages, setPages] = useState(0);
  useEffect(() => {
    GetAllProducts(pages);
  }, [pages]);
  console.log(data);
  return (
    <Stack>
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
          Actualmente estamos experimentando retrasos en el despacho de aduanas
          local. Para el últimas actualizaciones, verifique el estado de su
          pedido aquí
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
          <motion.div
            initial={{ y: 50, x: 100, opacity: 0 }} // Comienza desde abajo (y: 100) y con opacidad 0
            animate={{ y: 0, x: 0, opacity: 1 }} // Anima hacia arriba (y: 0) y con opacidad 1
            transition={{ duration: 0.5 }} // Duración de la animación
          >
            <Stack
              spacing={5}
              alignItems="center"
              justifyContent="center"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Stack width="20pc">
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
                <Typography
                  sx={{
                    fontSize: {
                      sx: "28px",
                      sm: "16px",
                    },
                  }}
                  color="primary"
                >
                  Descubre la calidad excepcional en cada producto de Mondongo,
                  <br />
                  donde la diversidad se encuentra con la excelencia.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                  }}
                  onClick={() => navigate("/Login")}
                >
                  Ver Mas
                </Button>
              </Stack>
              <Box
                component="img"
                src={Goku}
                sx={{
                  width: {
                    sx: "2pc",
                    md: "15pc",
                  },
                  objectFit: "cover",
                }}
              />
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
      <Stack justifyContent="center" alignItems="center" marginTop="4pc">
        <Grid
          container
          alignContent="center"
          justifyContent="center"
          spacing={0}
        >
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              style={{
                margin: "0 1pc",
              }}
            >
              <Link
                to="/Login"
                style={{
                  margin: "1pc",
                }}
              >
                <Grid item>
                  <RecipeReviewCard
                    name={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    category={item.category}
                  />
                </Grid>
              </Link>
            </motion.div>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Landing;
