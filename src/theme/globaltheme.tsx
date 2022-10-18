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
      light: pink[400],
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
          borderRadius:"10px",
          background: grey[800],
          boxShadow:"5px 5px 16px -8px #F50057",
          minWidth:"340px",
          maxWidth:"410px"
        },
      }
    },
  }


})

export default globaltheme;

