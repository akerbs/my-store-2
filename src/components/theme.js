import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4791db",
      main: "#1976d2",
      dark: " #115293",
      contrastText: "rgba(249,234,207)",
    },
    secondary: {
      main: "rgba(0,0,0)",
      contrastText: "#fff",
    },
  },
  third: {
    backgroundColor: "rgba(249,234,207)",
    color: "rgba(133,26,29)",
  },

  typography: {
    fontFamily: ["Bebas", "Poppins", "sans-serif"].join(","),
    fontSize: 14,
    body1bold: {
      fontWeight: "bold",
    },
    body2bold: {
      fontWeight: "bold",
    },
    // "fontWeightLight": 300,
    // "fontWeightRegular": 400,
    // "fontWeightMedium": 500
  },
})

export default theme

// fairyGatesTheme.overrideThemeStyles = () => ({
//   a: {
//     color: #YourColorHere,
//     textDecoration: "none",
//     backgroundImage: "none",
//     textShadow: "none",
//   },
// })
