import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif", // Cambia la familia de fuentes predeterminada
    h1: {
      fontSize: "2rem", // Cambia el tamaño de la fuente para los encabezados de nivel 1
      fontWeight: 500, // Cambia el peso de la fuente para los encabezados de nivel 1
    },
    h2: {
      fontSize: "1.64rem", // Cambia el tamaño de la fuente para los encabezados de nivel 2
      fontWeight: 500, // Cambia el peso de la fuente para los encabezados de nivel 2
    },
    // Puedes continuar personalizando otros niveles de encabezado (h3, h4, h5, h6) de la misma manera
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffeb3b !important",
          },
          ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffeb3b",
          },
          ".MuiFormLabel-root": {
            color: "#A1A1AA",
          },
          ".MuiSvgIcon-root": {
            color: "#ffeb3b",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiOutlinedInput-root": {
            fontWeight: 500,
            color: "#f8f8f8",
            borderRadius: "8px",
            "&.Mui-disabled": {
              backgroundColor: "#180f0c",
            },
          },
        },
      },
      variants: [
        {
          props: { variant: "standard" },
          style: {
            "input::before": {
              borderBottomColor: "red !important",
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid #a1a1aa36",
          color: "#fff",
          fontWeight: "400",
          "&:hover": {
            background: "#09090bed", // Cambia el color de fondo al pasar el mouse sobre el botón
          },
          background: "#09090bed",
          borderRadius: "19px",
          padding: "6px 1pc",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FF0000",
      contrastText: "#09090B",
    },
    secondary: {
      main: "#09090B",
    },
  },
});

export default theme;
