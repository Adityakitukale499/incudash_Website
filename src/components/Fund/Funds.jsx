import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Funds = () => {
  return (
    <>

    
    {/* <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
        color: "#212121",
      }}
    >
      <Grid container sx={{ width: "75%" }}>
        <Grid item xs={12} lg={4}>
          <img src="funded.jpg" style={{ width: "340px" }} />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: 37 }}>
              Are you looking for funding?
            </Typography>
            <br/>
            <Typography variant="body1" sx={{ mb: 1 }}>
              A right investor is the one who not only provides you money but
              also <br/> adds value to your startup. Now, it's time to meet your right
              investors.
            </Typography>
            <br/>
            <Typography variant="body1" sx={{mb : 1}}>
              Let us help you connect to the well known investors where we
              commit <br/> that we will share a pitch ready startup and hence,
              ensuring there is no <br/> rejection.
            </Typography>
            <br/>
            <Typography variant="body1">
              So, stop your struggle here. Let us help you get funded and we
              won't <br/> charge anything before you successfully raise funds.
            </Typography>
            <br/>
            <Typography variant="body1">
              Mail us your pitch deck on [email protected] <br/> OR <br/> Fill:
              http://bit.ly/etp_getfunded.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box> */}

    <Box sx={{ display: "flex", justifyContent: "center",my:10,color:'#212121' }}  >
    <Grid container  sx ={{width : "75%"}} gap={5} >
    <Grid item xs = {12} lg = {5} >
    <img src="funded.jpg" style={{ width: "100%" }} />

    </Grid>

    <Grid item xs = {12} lg = {6.5} >

    <Box >
          <Typography variant="h5" sx={{ fontWeight: 600}}>
          Are you looking for funding?
          </Typography>

          
          <br/>
          <Typography variant="body1" sx={{ mb: 1 }}>
              A right investor is the one who not only provides you money but
              also <br/> adds value to your startup. Now, it's time to meet your right
              investors.
            </Typography>
            <br/>
            <Typography variant="body1" sx={{mb : 1}}>
              Let us help you connect to the well known investors where we
              commit <br/> that we will share a pitch ready startup and hence,
              ensuring there is no <br/> rejection.
            </Typography>
            <br/>
            <Typography variant="body1">
              So, stop your struggle here. Let us help you get funded and we
              won't <br/> charge anything before you successfully raise funds.
            </Typography>
            <br/>
            <Typography variant="body1">
              Mail us your pitch deck on <sapn style={{color : "#FF8C22"}} >
              [email protected] 
              </sapn> <br/> OR <br/> Fill:
              http://bit.ly/etp_getfunded.
            </Typography>
        </Box>

</Grid>

    </Grid>
    
    </Box>
    

</>


    
  );
};

export default Funds;
