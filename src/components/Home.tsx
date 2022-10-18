import Box from '@mui/material/Box';
import React from 'react';
import globaltheme from "../theme/globaltheme";
import Logo from "../asset/logos/logo_bodyshape.webp"
import MyCard from "./MyCard";
function Home() {
  return (

    <>
      <Box
        color={globaltheme.palette.primary.contrastText}
        margin={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box maxWidth={"600px"}>
          <Box
            marginTop={"20px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img width={"200px"} src={Logo} alt={"logo"}/>
          </Box>
          <MyCard/>
        </Box>
      </Box>
    </>
  );
}

export default Home;
