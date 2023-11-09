import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

const Fund = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", color:'#545454' }}>
      <Grid container sx={{ width: "80%",gap:5 }}>
        <Grid item xs={12} lg={3.8} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} 
            sx={{
              bgcolor: "#ff8c22",
              color: "white",
              p: 3,
              m: 1,
              width: "350px" ,
              height: "240px"


             
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 500 , fontFamily: 'Raleway' , fontSize : "40px" }}
              color={"#FFFFFF"}
            >
              Toll Free
            </Typography>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 500 , fontFamily: 'Raleway' , fontSize : "40px"  }}
              color={"#FFFFFF"}
            >
              Number:
            </Typography>

            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 500 , fontFamily: 'Raleway' , fontSize : "40px" }}
              color={"#FFFFFF"}
            >
              18003099044
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={7.5} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Box sx={{ p: 1, px: 3 }}>
            <Typography mb= {1} variant="h4" sx={{ fontWeight: 500 , fontFamily: 'Raleway' , fontSize : "40px", color: "#444444"  }}>
              Looking for funds?
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 ,  fontWeight: 400 , fontFamily: 'Open Sans' , fontSize : "16px"  }} >
              Yes, we now not only make you pitch perfect but ensure you reach
              your destination. We are here for you to help you raise funds from
              the right investor who not only funds you but also adds good value
              to your venture.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 ,  fontWeight: 400 , fontFamily: 'Open Sans' , fontSize : "16px"  }}>
              Let us bridge this gap of connecting founders with investors.
            </Typography>
            <Button variant="text" sx={{ color: "#E96B56",p:0,my:2 , mb: 1 ,  fontWeight: 400 , fontFamily: 'Open Sans' , fontSize : "16px"  }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Fund;
