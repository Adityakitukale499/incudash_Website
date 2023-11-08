import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const Achievments = () => {
  return (
    <>

<Box sx={{display : "flex" , justifyContent: "center" , textAlign : "center", }} >
      <Grid container spacing={1} sx={{p:10, textAlign:'center', bgcolor: "#F5F7FA" ,px:20,color:'#212121'
  }}>
      
      <Grid item lg={2.4} xs={3} >
      <Typography variant="h3" sx={{fontWeight:600,fontSize : 45 }} >
            500+
        </Typography>
        <Typography variant="body2">Startup Served</Typography>
      </Grid>
      <Grid item lg={2.4} xs={3}>
      <Typography variant="h3" sx={{fontWeight:600 ,fontSize : 45}}>
            5000+
        </Typography>
        <Typography variant="body2" >Decks Reviewed</Typography>
      </Grid>
      <Grid item lg={2.4} xs={3} >
      <Typography variant="h3" sx={{fontWeight:600,fontSize : 45,}}>
            200+
        </Typography>
        <Typography variant="body2" >Ecosystem Partners</Typography>
      </Grid>
      <Grid item lg={2.4} xs={3}>
      <Typography variant="h3" sx={{fontWeight:600,fontSize : 45}}>
            1000+
        </Typography>
        <Typography variant="body2" >Founders Gromed</Typography>
      </Grid>
      <Grid item lg={2.4} xs={3}>
        <Typography variant="h3" sx={{fontWeight:600,fontSize : 45}}>
            21+
        </Typography>
        <Typography variant="body2">Cities Reached</Typography>
      </Grid>
      {/* <Grid item lg={2} xs={4}></Grid> */}
    </Grid>

      </Box>
      
    </>
  )
}

export default Achievments
