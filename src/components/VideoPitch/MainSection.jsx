import { Box, Grid, Typography } from "@mui/material";
import React from 'react'

const MainSection = () => {
  return (
    <>
    <Grid container spacing={2} sx={{mt:0,mb:5,p:2,px:18, textAlign:'center', bgcolor: "#F5F7FA",color:'#212121'
    }}>

     <Typography>
     <Typography variant="body1">
          <span style={{color :"#FF8C22" }} >
          Home
          </span>  / Video Pitch
        </Typography> 
        <br/>
        <Typography variant="h4">
        Video Pitch
     </Typography>


     </Typography>

   
        
    </Grid>
      
    </>
  )
}

export default MainSection
