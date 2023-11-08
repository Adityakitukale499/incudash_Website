import { Box, Grid, Typography } from "@mui/material";
import React from "react";



const Body = () => {
  return (
    <>

  
    <Box sx={{ display: "flex", justifyContent: "center",my:10,color:'#212121' }}  >
    <Grid container  sx ={{width : "75%"}} gap={5} >
    <Grid item xs = {12} lg = {5} >
    <img
          src= "MainSection.jpg"
          style={{ width : "100%"}}
        />

    </Grid>

    <Grid item xs = {12} lg = {6.5} >

    <Box >
          <Typography variant="h5" sx={{ fontWeight: 600}}>
            Let us be a part of your startup 
            journey!
          </Typography>

          <Typography variant="body1" >
          We make founders pitch ready.
          </Typography>
          <br/>
          <Typography variant="body1" sx={{ mb: 1 }}>
           
          As we know, at an early stage for startups it becomes difficult for founders to <br/> spend considerable capital to hire graphic designers to design their pitch <br/> decks or paying agencies for finances or onboarding mentors with stakes. <br/> We make it easy for startups by creating well researched and impeccably <br/> designed pitch decks at a very minimal cost, which will help them make the <br/> most out of their funding opportunities.
          </Typography>
          <br/>

          <Typography variant="body1">
          We, at Easy To Pitch focus on every industry space and our association with <br/> <span style={{fontWeight : 800}} >
          500+ startups
          </span>  proves that. Once associated, we will ensure that your <br/> startup becomes pitch-perfect. Not only this we are a team that includes <br/><span style={{fontWeight : 800}} >
          IIMians 
          </span> with various domain expertise.
          </Typography>
        </Box>

</Grid>

    </Grid>
    
    </Box>

    </>
  );
};

export default Body;
