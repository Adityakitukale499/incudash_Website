import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign : "center" , fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "18px" }} color={"#000000"} >
        Our Portfolio
      </Typography>
     

      <Box display={"flex"} my={5} justifyContent={"center"}>
        <img src="comapany.png " width={"75%"} />
      </Box>

      <Typography
        variant="h6"
        my={10}
        sx={{ textAlign : 'center', fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "18px" }} color={"#000000"}
      >
        Our Partners
      </Typography>

      <Grid container mb={7}>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box bgcolor={"#F5F7FA"} p={4}>
            <Typography  mb={3} variant="h5" gap={4}   sx={{ textAlign : 'center', fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"}>
              "Aliquet consectetur id magna <br />
              ac integer. Aliquet consectetur <br />
              id magna acinteger."
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <img src="aliquet.png" width={"50px"} height={"50px"} />

              <Box   sx={{ textAlign : 'start', fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#000000"} lineHeight={'21px'}>
                Full Name, Title <br />
                Company
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img src="company2.png" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
