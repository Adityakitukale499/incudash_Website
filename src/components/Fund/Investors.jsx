import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Investors = () => {
  return (
    <>
      <Typography sx={{fontFamily: "Poppins" , fontWeight: 600 , fontSize: '28px' , lineHeight:"33.6pxpx" , textAlign: 'center'}} color={"#444444"} my={10}>
        Investors On Board
              <br/>
            <img src="Vector.png" alt="" />
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:10
          }}
        >
          <span
            style={{ height: "3px", width: "60px", backgroundColor: "#FF8C22" }}
          ></span>
        </div> */}
      </Typography>
      {/* <Grid
        item
        xs={12}
        lg={2}
        sx={{
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} justifyContent={"center"} mb={6}>
          <img src="investors.png" width={"90%"} />
        </Box>
      </Grid> */}
      <Grid
        container
        sx={{ gap: 5, mb: 5, display: "flex", justifyContent: "center",px:{lg:20,md:8,xs:3}}}
      >
        <Grid item xs={12} lg={5.7} 
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box>
          <Typography
            sx={{
              textAlign: { lg: "start", xs: "center" },
              fontWeight: 600,
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontStyle: "italic",
            }}
            color={"#545454"}
          >
            <span style={{ fontSize: "12px",fontWeight: 900 }}>Venture Catalysts</span> <br />
            Raising funds from Venture Catalysts certainly helped our business
            to expand our reach offline and upgrade logistics and
            infrastructural needs.
          </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={5.7}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <img
              src="https://venturecatalysts.in/assets/images/new-logo.svg"
              width={"110%"}
            />
            {/* <img src="https://www.jpin.co/wp-content/themes/jpin/images/jpin-vcats-logo.svg" width={"5%"}/> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Investors;