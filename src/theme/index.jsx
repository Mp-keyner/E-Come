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
      main: "#ffff",
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
        },
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
