import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";

const FeatureSection = () => {
  return (
    <Box m={10}>
      <Grid container display={"flex"} px={10}  justifyContent={"center"} alignItems={"center"} gap={10} >
        <Grid item  textAlign={"start"} xs= {12} lg ={4.5}>
          <Typography variant="h5" fontWeight={600} mb={1}>
           Latest Update
          </Typography>
          <Typography mb={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
          </Typography>

          <Button variant="text" sx={{p:0,my:2, color:'orange'}}>
              Learn More
            </Button>
        </Grid>

        <Grid item textAlign={"start"} justifyContent={"center"} xs= {12} lg = {6}  >
        <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography variant="body1" fontSize={19} fontWeight={600}>
            We got featured in CRN India!
            </Typography>
            <Typography variant="body2">
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography  variant="body2"  sx={{textAlign : "end" , color: "orange"}} >
                Learn More
              </Typography>
              </Box>
          </Box>

          <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography variant="body1" fontSize={19} fontWeight={600}>
            We got featured in CRN India!
            </Typography>
            <Typography variant="body2">
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography  variant="body2"  sx={{textAlign : "end" , color: "orange"}} >
                Learn More
              </Typography>
              </Box>
          </Box>

          <Box display={"flex"} gap={5}  my={2}>
            <img src="Image-1.png" width={80} />
            <Box sx={{width:'100%'}}>
            <Typography variant="body1" fontSize={19} fontWeight={600}>
            We got featured in CRN India!
            </Typography>
            <Typography variant="body2">
            Easy to Pitch launches India's first helpline for  founders, disrupts startup ecosystem
            </Typography>
              <Typography  variant="body2"  sx={{textAlign : "end" , color: "orange"}} >
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