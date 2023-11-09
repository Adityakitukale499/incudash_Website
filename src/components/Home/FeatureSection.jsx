import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";

const FeatureSection = () => {
  return (
    <Box m={{
      lg: 10,
      md: 8,
      sm: 6,
      xs: 2}}>
      <Grid container display={"flex"} px={{
      lg: 10,
      md: 8,
      sm: 6,
      xs: 2}}  justifyContent={"center"} alignItems={"center"} gap={10} >
        <Grid item  textAlign={"start"} xs= {12} lg ={4.5}>
          <Typography sx={{fontFamily:"Montserrat" , fontWeight:700,fontSize:"24px",lineHeight:"36px",color:"#000000" }} mb={1}>
           Latest Update
          </Typography>
          <Typography mb={1} sx={{fontFamily:"Montserrat" , fontWeight:400,fontSize:"14px",lineHeight:"21px",color:"#000000"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
          </Typography>

          <Button variant="text" sx={{p:0,my:2,fontFamily:"Montserrat" , fontWeight:400,fontSize:"14px",lineHeight:"21px",color:"#000000"}}>
              Learn More
            </Button>
        </Grid>

        <Grid item textAlign={"start"} justifyContent={"center"} xs= {12} lg = {6}  >
        <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography sx={{fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"} >
            We got featured in CRN India!
            </Typography>
            <Typography  sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"}>
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography  sx={{textAlign : "right" , color: "#FF8C22" , fontFamily:"Montserrat" , fontSize:"12px",lineHeight:"18px",fontWeight:400}} >
                Learn More
              </Typography>
              </Box>
          </Box>

          <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography sx={{fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"}>
            We got featured in CRN India!
            </Typography>
            <Typography sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"}>
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography sx={{textAlign : "right" , color: "#FF8C22" , fontFamily:"Montserrat" , fontSize:"12px",lineHeight:"18px",fontWeight:400}} >
                Learn More
              </Typography>
              </Box>
          </Box>

          <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography sx={{fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"}>
            We got featured in CRN India!
            </Typography>
            <Typography sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" , lineHeight:"21px" }} color={"#000000"}>
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography  sx={{textAlign : "right" , color: "#FF8C22" , fontFamily:"Montserrat" , fontSize:"12px",lineHeight:"18px",fontWeight:400}} >
                Learn More
              </Typography>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;