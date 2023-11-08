import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Achievment = () => {
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
    
//     <Grid container spacing={2} justifyContent="space-between" sx={{ my: 1, py: 3, textAlign: 'center', bgcolor: "#F5F7FA" }}>
//   <Grid item lg={2.4} xs={4}>
//     <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 50 }}>
//       500+
//     </Typography>
//     <Typography variant="caption">Startup Served</Typography>
//   </Grid>
//   <Grid item lg={2.4} xs={4}>
//     <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 40 }}>
//       5000+
//     </Typography>
//     <Typography variant="caption">Decks Reviewed</Typography>
//   </Grid>
//   <Grid item lg={2.4} xs={4}>
//     <Typography variant="h3" sx={{ fontWeight: 600 }}>
//       200+
//     </Typography>
//     <Typography variant="caption">Ecosystem Partners</Typography>
//   </Grid>
//   <Grid item lg={2.4} xs={4}>
//     <Typography variant="h3" sx={{ fontWeight: 600 }}>
//       1000+
//     </Typography>
//     <Typography variant="caption">Founders Groomed</Typography>
//   </Grid>
//   <Grid item lg={2.4} xs={4}>
//     <Typography variant="h3" sx={{ fontWeight: 600 }}>
//       21+
//     </Typography>
//     <Typography variant="caption">Cities Reached</Typography>
//   </Grid>
// </Grid>

    
  );
};

export default Achievment;
