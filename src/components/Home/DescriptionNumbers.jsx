import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const DescriptionNumbers = () => {
  return (
    <Grid container spacing={2} sx={{my:5,p:8,px:18, textAlign:'center', bgcolor: "#F5F7FA",color:'#212121'
    }}>
      {/* <Grid item lg={2} xs={4}></Grid> */}
      <Grid item lg={3} xs={6}>
      <Typography variant="h3" sx={{fontWeight:600,fontSize:45}}>
            12%
        </Typography>
        <Typography variant="body2">Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={6}>
      <Typography variant="h3" sx={{fontWeight:600,fontSize:45}}>
            87%
        </Typography>
        <Typography variant="body2">Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={6}>
      <Typography variant="h3" sx={{fontWeight:600,fontSize:45}}>
            $5000
        </Typography>
        <Typography variant="body2">Metric description</Typography>
      </Grid>
      <Grid item lg={3} xs={6}>
      <Typography variant="h3" sx={{fontWeight:600,fontSize:45}}>
            87%
        </Typography>
        <Typography variant="body2">Metric description</Typography>
      </Grid>
     
    </Grid>
    
  );
};

export default DescriptionNumbers;
