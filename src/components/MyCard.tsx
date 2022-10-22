import React, {FC, useEffect, useState} from 'react';
import {Card, Checkbox, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import globaltheme from "../theme/globaltheme";

interface MyCardProps {
  number?:number
  exerciseImage?:string,
  muscleGroup?:string,
  title?:string,
  description?: string,
  recovery?:string,
  reset?: boolean,
}


const MyCard:FC<MyCardProps> = (props) => {
  const{
    number,
    exerciseImage,
    muscleGroup,
    title,
    description,
    recovery,
    reset
  }=props

  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  useEffect(() => {
    setChecked(false)
  },[reset])

  return (
    <Box>
      <Box mt={"20px"} mx={"16px"}>
        <Card>
          <Box display={"flex"} >
            <Box borderRight={"2px solid"+globaltheme.palette.secondary.light} bgcolor={"white"} width={"160px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <img width={"85%"} src={exerciseImage} alt={"phototest"}/>
            </Box>
            <Box width={"100%"} px={"8px"}>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant={"h4"} color={globaltheme.palette.secondary.light}>
                  {number}-{muscleGroup}
                </Typography>
                <Checkbox checked={checked} onChange={handleChange} />
              </Box>
              <Box mb={"8px"} >
                <Typography color={globaltheme.palette.primary.main} variant={"h3"}>{title}</Typography>
                <Typography color={globaltheme.palette.primary.dark}>Reps: {description}</Typography>
                <Typography color={globaltheme.palette.primary.dark}>Recupero: {recovery} secondi</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

    </Box>

  )
}

export default MyCard;