import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <>
    <Typography  sx={{ textAlign : "center" , fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "18px", mt:10 }} color={"#000000"} >
        Our Investores
      </Typography>
     

      <Box display={"flex"} my={5} justifyContent={"center"} gap={5}>
        <img src="https://venturecatalysts.in/assets/images/new-logo.svg" width={"25%"} />
        <img src="https://www.jpin.co/wp-content/themes/jpin/images/jpin-vcats-logo.svg" width={"5%"}/>
      </Box>
      <Typography  sx={{ textAlign : "center" , fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "18px" }} color={"#000000"} >
        Our Portfolio
      </Typography>
     

      <Box display={"flex"} my={5} justifyContent={"center"}>
        <img src="comapany.png " width={"75%"} />
      </Box>

      <Typography
        my={10}
        sx={{ textAlign : 'center', fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "18px" }} color={"#000000"}
      >
        Our Partners
      </Typography>

      <Grid container mb={7} mx={0}  gap={10}>
        <Grid
          item
          xs={12}
          lg={5.5}
          sx={{
            display: "flex ",
            justifyContent: {lg:"end",xs:'center'},
            alignItems: "center",
          }}
        >
          <Box bgcolor={"#F5F7FA"} p={4}>
            <Typography  mb={3} variant="h5" gap={4}   sx={{ textAlign : 'center', fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"}>
              "Aliquet consectetur id magna <br />
              ac integer. Aliquet consectetur <br />
              id magna acinteger."
            </Typography>

            <Box sx={{ display: "flex",justifyContent:{lg:'start', xs:'center'}, gap: 2 }}>
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
          lg={5}
          sx={{
            display: "flex ",
            justifyContent: {lg:"start",xs:'center'},
            alignItems: "center",
          }}
        >
          <Box>
            <img src="company2.png" style={{width:'95%'}}/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
