import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Hero = () => {
  return (
    <Box sx={{backgroundImage: "url('Hero.png')", backgroundRepeat: "no-repeat",
    backgroundSize: "cover",mt:2}}>
      <Grid container spacing={2} sx={{p:8}}>
        <Grid item lg={6} xs={12}>
        <Box sx ={{px : 6, color:'#212121'}}>
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
            We'll make you <br />
            and your startup <br />
            investment ready
          </Typography>
          <Typography variant="h6" sx={{my:2}} >
            Easy to Pitch is India's first AI platform for founders to become <br/>
            investment ready.
          </Typography>

          <Button variant="contained" sx={{'&:hover': {
                background:'#ff8c22'
           }
              ,bgcolor:"orange", color:"white"}}>Get Started</Button>
            
        </Box>
         
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://leaderonomics-storage.s3.ap-southeast-1.amazonaws.com/mika_baumeister_ylgxwqex2c_unsplash_80bdf2_50ced91a6c.jpeg"
              style={{ width: "80%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
