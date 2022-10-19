import Box from '@mui/material/Box';
import React, {FC} from 'react';
import globaltheme from "../theme/globaltheme";
import Logo from "../asset/logos/logo_bodyshape.webp"
import MyCard from "./MyCard";
import {Button, Divider, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {grey} from "@mui/material/colors";

interface HomeProps {}

const Home:FC<HomeProps> = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    <>
      <Box
        color={globaltheme.palette.primary.contrastText}
        margin={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box width={"600px"} bgcolor={globaltheme.palette.primary.dark}>
          <Box
            zIndex={1000}
            bgcolor={globaltheme.palette.primary.dark}
            marginTop={"20px"}
            position={"fixed"}
            width={"100%"}
            mt={0}
            height={"60px"}
          >
            <Box
              ml={"18px"}
              my={"5px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <img width={"120px"} src={Logo} alt={"logo"}/>
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon fontSize="large" sx={{color:grey[50]}} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem sx={{color: globaltheme.palette.primary.main, fontWeight:"bold"}} onClick={handleClose}>Day-1</MenuItem>
                  <Divider color={globaltheme.palette.secondary.light}/>
                  <MenuItem sx={{color: globaltheme.palette.primary.main, fontWeight:"bold"}} onClick={handleClose}>Day-2</MenuItem>
                </Menu>
              </Box>
            </Box>

          </Box>
          <MyCard/>
        </Box>
      </Box>
    </>
  );
}

export default Home;
