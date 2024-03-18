import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B4B66",
      contrastText: "#000",
    },
    secondary: {
      main: "#FF8C4B",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#97451F",
      contrastText: "#232323",
    },
    error: {
      main: "#f44336", // Color de error
    },
    warning: {
      main: "#ff9800", // Color de advertencia
    },
    info: {
      main: "#2196f3", // Color de información
    },
    success: {
      main: "#4caf50", // Color de éxito
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    // ... otras configuraciones tipográficas
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "green",
            },
            "&:hover fieldset": {
              borderColor: "blue",
            },
            "&.Mui-focused fieldset": {
              borderColor: "red",
            },
            color: "#000",
          },
          "& .MuiInputLabel-outlined": {
            "&.Mui-focused": {
              color: "purple",
            },
          },
          "& .MuiInputBase-input": {
            "&::placeholder": {
              color: "gray",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          link: {
            borderColor: "blue",
            background: "red",
          },
        },
        contained: {
          color: "#fff",
        },
        text: {
          // Aquí puedes definir tus estilos personalizados para la variante 'text'
          // Por ejemplo, para cambiar el color del texto y el color de fondo al pasar el cursor
          // "&:hover": {
          //   backgroundColor: "lightblue",
          // },
        },

        variants: [
          {
            props: { variant: "dashed" },
            style: {
              textTransform: "none",
              border: "1px solid red",
            },
          },
        ],
      },
    },
  },
});

export default theme;
