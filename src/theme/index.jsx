import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
            color: "#fff",
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
  },
});

export default theme;
