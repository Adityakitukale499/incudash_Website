import { Box, Grid, Typography } from "@mui/material";
import React from "react";



const Body = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center",my:10,color:'#212121' }}>
    <Grid container  sx ={{width : "75%"}}  >
    <Grid item xs = {12} lg = {4} >
    <img
          src= "Top_Lapy.png"
          style={{ width : "340px"}}
        />

    </Grid>

    <Grid item xs = {12} lg = {8} >

    <Box >
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize:37 }}>
            Let us be a part of your startup <br/>
            journey!
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            We make founders pitch ready. Build your startup story and not just
            a pitch deck. Get <br/> your Financial Valuations and Projections perfect
            Customized jaw-dropping <br/> presentations with best design and crisp
            content to raise capital.
          </Typography>

          <Typography variant="body1">
            Depending on the sector, stage and market of your startup, Easy to
            Pitch builds your <br/>  investment pitch deck presentation that is
            designed to tell your startup story in the <br/>
            best way possible to
            investors in order to face less rejections.
          </Typography>
        </Box>

</Grid>

    </Grid>
    
    </Box>
  );
};

export default Body;
