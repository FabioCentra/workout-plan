import React, {FC} from 'react';
import {Card, Checkbox, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ImageTest from '../asset/images/day-1/distensioni-panca-piana.png'
import globaltheme from "../theme/globaltheme";
import {teal} from "@mui/material/colors";
interface MyCardProps {}

const cardHeight:string = "160px";
const rightTextBox:string = "100px";

const MyCard:FC<MyCardProps> = () => {
  return (
    <Box mt={"80px"}>
      <Box mt={"20px"} mx={"16px"}>
        <Card>
          <Box display={"flex"} >
            <Box borderRight={"2px solid"+globaltheme.palette.secondary.light} bgcolor={"white"} width={"160px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <img width={"85%"} src={ImageTest} alt={"phototest"}/>
            </Box>
            <Box width={"100%"} px={"8px"}>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={"h4"} color={globaltheme.palette.secondary.light}>
                  Pettorali
                </Typography>
                <Checkbox  />
              </Box>
              <Box mb={"8px"} >
                <Typography color={globaltheme.palette.primary.main} variant={"h3"}>Distenzioni panca piana</Typography>
                <Typography color={globaltheme.palette.primary.dark}>Ripetizioni: 3x10</Typography>
                <Typography color={globaltheme.palette.primary.dark}>Recupero: {60} secondi</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

    </Box>

  )
}

export default MyCard;