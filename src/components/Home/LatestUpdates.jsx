import { Box, Grid, Typography , Button } from "@mui/material";
import React from "react";

export const LatestUpdates = () => {
  return (
    <>
      <Box
        textAlign={"center"}
        px={{
          lg: 15,
          md: 5,
          sm: 2,
          xs: 2}}
        justifyContent={"center"}
        bgcolor={"#F5F7FA"}
        color={'#212121'}
      >
        <Typography variant="h4" sx={{ textAlign : "center" , fontWeight: 700 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"} pt={8} >
        Our News Articles
          {/* Latest Updates */}
        </Typography>

        <Typography my={2} variant="h6" sx={{ textAlign : "center" , fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px" }} color={"#000000"} mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse tincidunt sagittis eros. Quisque quis euismod <br />{" "}
          lorem.
        </Typography>
        <Button  sx={{ color: "#000000" ,  fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "14px"  }}>
              Learn More
            </Button>

        <Grid container justifyContent={"center"} spacing={4} pb={7}>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: {
          lg: '85%',
          md: '90%',
          sm: '95%',
          xs: '100%'} }}>
              <img src="Full name.png" width={"100%"} />
              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" sx={{fontWeight: 600 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"}>
                  Full name
                </Typography>

                <Typography variant="body1" sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "16px" }} color={"#000000"}>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: {
          lg: '85%',
          md: '90%',
          sm: '95%',
          xs: '100%'} }}>
              <img src="Full name2.png" width={"100%"} />

              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" sx={{fontWeight: 600 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"}>
                  Full name
                </Typography>

                <Typography variant="body1" sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "16px" }} color={"#000000"}>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: {
          lg: '85%',
          md: '90%',
          sm: '95%',
          xs: '100%'} }}>
              <img src="Full name3.png" width={"100%"} />

              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" sx={{fontWeight: 600 , fontFamily: 'Montserrat' , fontSize : "24px" }} color={"#000000"}>
                  Full name
                </Typography>

                <Typography variant="body1" sx={{fontWeight: 400 , fontFamily: 'Montserrat' , fontSize : "16px" }} color={"#000000"}>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestUpdates;
