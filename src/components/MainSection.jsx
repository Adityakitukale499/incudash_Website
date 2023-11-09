import { Box, Grid, Typography } from "@mui/material";
import React from 'react'

const MainSection = ({routeName}) => {
  return (
    <>
    <Grid container spacing={2} sx={{mt:0,p:2,px:18, textAlign:'center', bgcolor: "#F5F7FA",color:'#212121'
    }}>

     <Typography>
     <Typography variant="body1" sx={{fontFamily : "Montserrat" , fontWeight: 400, fontSize:"14px" }} color={"#000000"} > 
          <span style={{color :"#FF8C22" ,fontFamily : "Open Sans" , fontWeight: 400, fontSize:"14px"}} >
          Home
          </span>  / {routeName}
        </Typography> 
        <br/>
        <Typography mt={-3} style={{color :"#545454" ,fontFamily : "Raleway" , fontWeight: 700, fontSize:"28px"}}>
        {routeName}
     </Typography>


     </Typography>

   
        
    </Grid>
      
    </>
  )
}

export default MainSection
