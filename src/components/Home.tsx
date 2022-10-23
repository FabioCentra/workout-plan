import Box from '@mui/material/Box';
import React, {FC, useState} from 'react';
import globaltheme from "../theme/globaltheme";
import Logo from "../asset/logos/logo_bodyshape.webp"
import MyCard from "./MyCard";
import {Button, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {grey} from "@mui/material/colors";
import {dayOne, dayTwo} from "../data/days";

interface HomeProps {}

const Home:FC<HomeProps> = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [day, setDay] = useState(dayOne)
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const[reset, setReset] = useState(true)


  return (

    <>
      <Box
        zIndex={1000}
        bgcolor={globaltheme.palette.primary.dark}
        position={"fixed"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"70px"}
        width={"100%"}
        pl={"10px"}
        top={0}
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
            <MenuItem sx={{color: globaltheme.palette.primary.main, fontWeight:"bold"}} onClick={() => {setDay(dayOne); handleClose(); setReset(!reset)}}>Day-1</MenuItem>
            <MenuItem sx={{color: globaltheme.palette.secondary.light, fontWeight:"bold"}} onClick={() =>  {setDay(dayTwo); handleClose();  setReset(!reset)}}>Day-2</MenuItem>
          </Menu>
        </Box>

      </Box>

      <Box mt={"80px"} mb={"20px"}>
        {day.map((element, index:any)=> <MyCard
          key={index}
          number={index+1}
          exerciseImage={element?.exerciseImage}
          muscleGroup={element?.muscleGroup}
          title={element?.title}
          description={element?.description}
          recovery={element?.recovery}
          reset={reset}
        />)}
      </Box>

    </>
  );
}

export default Home;
