import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Investor = () => {
  return (
    <>

  


    <Box sx={{ display: "flex", justifyContent: "center",my:10,color:'#212121' }}  >
    <Grid container  sx ={{width : "75%"}} gap={5} >
    <Grid item xs = {12} lg = {5} >
    <img src="invest.jpg" style={{ width: "100%" }} />

    </Grid>

    <Grid item xs = {12} lg = {6.5} >

    <Box >
          <Typography variant="h5" sx={{fontFamily: "Montserrat" , fontWeight: 500 , fontSize: '32px' , lineHeight:"38.4pxpx"}} color={"#444444"}>
          Invest in promising startups
          </Typography>

          
          <br/>
          <Typography variant="body1" sx={{  mb: 1 , fontFamily: "Montserrat" , fontWeight: 400 , fontSize: '16px' , lineHeight:"24px"}} color={"#444444"}>
            We bring you the India's best curated startups that are ready to pitch <br/> and in their right stage of raising funds to expand and scale. <br/> Join us to invest in various filtered, reliable and credible early stage <br/> startups across sectors and geographies.
            </Typography>
            <br/>
           
            
            <Typography variant="body1" sx={{  mb: 1 , fontFamily: "Montserrat" , fontWeight: 400 , fontSize: '16px' , lineHeight:"24px"}} color={"#444444"}>
            Easy To Pitch males founders pitch ready for the next fundraise and <br/> ensures the risk of investing is reduced or eliminated <br/> Easy To Pitch focuses on every industry space and our association with <br/> 1000+ startups proves that.
            </Typography>
            <br/>
            <Typography variant="body1" sx={{  mb: 1 , fontFamily: "Montserrat" , fontWeight: 400 , fontSize: '16px' , lineHeight:"24px"}} color={"#444444"} >
            Reach us on {" "}
            
            <span style={{color : "#FF8C22"}} >
            investments@easytopitch.com  
             </span> {" "}
             to know more or fill up a  <br/> short questionnaire <span style={{color : "#FF8C22"}} >
                 bit.ly/etp_beinvestor
            </span>
           

            </Typography>
            
        </Box>

</Grid>

    </Grid>
    
    </Box>
    </>
  );
};

export default Investor;