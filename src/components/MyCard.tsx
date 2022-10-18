import React, {FC} from 'react';
import {Card} from "@mui/material";
import Box from "@mui/material/Box";
import ImageTest from '../asset/images/day-1/distensioni-panca-piana.png'
import globaltheme from "../theme/globaltheme";
interface MyCardProps {}


const MyCard:FC<MyCardProps> = () => {
  return (
    <Box marginTop={"20px"}>
      <Card >
        <Box display={"flex"} height={"160px"}>
          <Box bgcolor={"white"} width={"140px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img src={ImageTest} alt={"phototest"}/>
          </Box>
          <Box px={"10px"}>
            <p>Categories</p>
            <h3>Distenzioni panca piana</h3>
            <h4>Rip: 3 x 10</h4>
          </Box>
        </Box>
      </Card>
    </Box>

  )
}

export default MyCard;