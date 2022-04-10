import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      paper: "#1b2330",
      white: "#ffffff",
      default: "#FFB457",
    },
    primary: {
      main: "#1b2330",
      contrastText: "#1b2330",
    },
    secondary: {
      main: "#FFB457",
      contrastText: "#fff",
    },
    third: {
      main: "#694E4E"
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1,
      color: "#fff",
    },
    h2: {
      letterSpacing: "-.025em",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 2.5,
      color: "#fff",
    },
    h3: {
      color: "#fff",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.75,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#d1d5db",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#9CA3AF",
    },
  },
});

export default theme;
