import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const DescriptionNumbers = () => {
  return (
    <Grid container spacing={2} sx={{my:5,p:8,px:18, textAlign:'center', bgcolor: "#F5F7FA",color:'#212121'
    }}>
      {/* <Grid item lg={2} xs={4}></Grid> */}
      <Grid item lg={3} xs={12}>
      <Typography variant="h3" sx={{ mb: 1 ,  fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "40px" }}
      color={"#212121"}>
            12%
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#212121"}>Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={12}>
      <Typography variant="h3" sx={{ mb: 1 ,  fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "40px" }}>
            87%
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#212121"}>Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={12}>
      <Typography variant="h3" sx={{ mb: 1 ,  fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "40px" }}>
            $5000
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#212121"}>Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={12}>
      <Typography variant="h3" sx={{ mb: 1 ,  fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "40px" }}>
            87%
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#212121"}>Metric description</Typography>
      </Grid>
     
    </Grid>
    
  );
};

export default DescriptionNumbers;
