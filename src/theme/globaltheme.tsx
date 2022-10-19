import { createTheme } from "@mui/material/styles";
import {grey, pink, red, teal} from "@mui/material/colors";


const globaltheme = createTheme({


  palette:{
    primary:{
      light: grey[400],
      main: grey[800],
      dark: grey[900],
      contrastText: grey[50],
    },
    secondary:{
      light: "#EC008B",
      main: pink[800],
      dark: pink[900],
      contrastText: grey[50],
    },
    error:{
      main: red["A400"],
    },
    success:{
      main: teal["A700"]
    },
  },

  components:{
    MuiCard:{
      styleOverrides:{
        root:{
          border:"none",
          borderRadius:"6px",
          background: "white",
          boxShadow:"5px 5px 18px -10px #F50057",
          width:"100%",
        },
      }
    },
    MuiTypography: {
      styleOverrides:{
        h3:{
          display: "block",
          fontSize: "1.17em",
          fontWeight: "bold",
        },
        h4:{
          display: "block",
          fontSize: "1em",
          fontWeight: "bold",
        }
      }
    },
    MuiCheckbox:{
      styleOverrides:{
        root:{
          color: "#EC008B",
          '&.Mui-checked': {
            color:"#EC008B",
          },
          '& .MuiSvgIcon-root': { fontSize: 28 }
        },
      }
    },
  }


})

export default globaltheme;

