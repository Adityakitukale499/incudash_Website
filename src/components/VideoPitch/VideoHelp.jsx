import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'orange' : '#308fe8',
  },
}));


const VideoHelp = () => {
  return (
//     <>

    
        
// <Typography variant="h5" fontWeight={600} textAlign={"center"} my={10}>
//         What we help you with
        
//         <br/>
//         <div style={{display: "flex",justifyContent : "center" ,alignItems : "center" }} >
//       <span style={{height:"3px",width : "60px", backgroundColor:"#FF8C22"}}  >


//       </span>
        
//       </div>
        
//       </Typography>
        
//       <Grid container>

//         <Grid item>
//         <Typography variant='body1'>
//         We are a team of talented experts, analysts and designers with experience <br/> across multiple domains. We know that raising funds is not an easy task. We <br/> at Easy To Pitch help you to overcome all the hurdles in your fundraising <br/> journey. We assist you in every step, be it making your documents or <br/> connecting you with the right investor for your startup.

//         </Typography>

//         </Grid>
//         <Grid item>
          
//         </Grid>
//       </Grid>
      
//     </>
<>
<>
      <Typography variant="h5" fontWeight={600} textAlign="center" my={10} sx={{ textAlign: "center" }}>
        What we help you with
        <br />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span style={{ height: "3px", width: "60px", backgroundColor: "#FF8C22" }}></span>
        </div>
      </Typography>

      <Grid container p={5}>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" sx={{ textAlign: "center",  margin: "0 auto" }}>
            We are a team of talented experts, analysts, and designers with experience across multiple domains. We know that raising funds is not an easy task. We at Easy To Pitch help you to overcome all the hurdles in your fundraising journey. We assist you in every step, be it making your documents or connecting you with the right investor for your startup.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} px={5}>
          
      <BorderLinearProgress variant="determinate" value={80} />
      <br />
      <BorderLinearProgress variant="determinate" value={85} />
      <br />
      <BorderLinearProgress variant="determinate" value={70} />
      <br />
      <BorderLinearProgress variant="determinate" value={95} />
        </Grid>
      </Grid>
    </>
</>
  )
}

export default VideoHelp
