import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <Box sx={{ px: { lg: 17, md: 8, xs: 2 }, my: 5 }}>
      {" "}
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Montserrat",
          fontSize: "18px",
          my: 4,
        }}
        color={"#000000"}
      >
        Our Investores<br/>
        <img src="Vector.png" alt="" />
      </Typography>
      <Grid
        container
        sx={{ gap: 5, mb: 5, display: "flex", justifyContent: "center" }}
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
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Montserrat",
          fontSize: "20px",
        }}
        color={"#000000"}
      >
        Our Portfolio <br/>
        <img src="Vector.png" alt="" />
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <img src="comapany.png " width={"100%"} />
        </Box>
      </Box>
      <Typography
        my={10}
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Montserrat",
          fontSize: "20px",
        }}
        color={"#000000"}
      >
        Our Partners<br/>
        <img src="Vector.png" alt="" />
      </Typography>
      <Grid container mb={7} mx={0} gap={10}>
        <Grid
          item
          xs={12}
          lg={5.5}
          sx={{
            display: "flex ",
            justifyContent: { lg: "end", xs: "center" },
            alignItems: "center",
          }}
        >
          <Box bgcolor={"#F5F7FA"} p={4}>
            <Typography
              mb={3}
              gap={4}
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontFamily: "Montserrat",
                fontSize: "24px",
              }}
              color={"#000000"}
            >
              "Aliquet consectetur id magna <br />
              ac integer. Aliquet consectetur <br />
              id magna acinteger."
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { lg: "start", xs: "center" },
                gap: 2,
              }}
            >
              <img src="aliquet.png" width={"50px"} height={"50px"} />

              <Box
                sx={{
                  textAlign: "start",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
                color={"#000000"}
                lineHeight={"21px"}
              >
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
            justifyContent: { lg: "start", xs: "center" },
            alignItems: "center",
          }}
        >
          <Box>
            <img src="company2.png" style={{ width: "95%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
