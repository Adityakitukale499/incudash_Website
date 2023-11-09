import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const PricingComparision = () => {
  return (
    <>
      <Box px={"15%"} mt={4} bgcolor={"#ffff"} color={"#545454"}>
        <Grid container justifyContent={"center"} spacing={0} pb={3}>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={4}
          >
            <Box
              bgcolor={"white"}
              sx={{ p:3, width: "100%", boxShadow: "1px 1px 150px #8888" }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing1.png" width={"80px"} />
              </Box>

              <Typography
                fontSize={"40px"}
                lineHeight={"72px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Idea/MVP
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Stage{" "}
                </Typography>
              </Typography>
              {/* <Box padding={"5px"} margin={"2px"} my={5}  border={"1px solid #212121"} height={'49px'}>
                <Typography textAlign={'center'}>TALK TO AN EXPERT</Typography>
              </Box> */}
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color:'#ffff',
                    borderColor:'#ff8c22'
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color:'#212121',
                  borderColor:'#212121',
                  my:5
                }}
              >
                Talk to an expert
              </Button>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Story and Market Analysis</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Basic Financials</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Validation</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Customer Design</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Founder Grooming</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Financial Valuations</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Detailed Business Plan</Typography>
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
            p={4}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 150px #8888" }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing2.png" width={"80px"} />
              </Box>

              <Typography
                fontSize={"40px"}
                lineHeight={"72px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Seed
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Stage{" "}
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color:'#ffff',
                    borderColor:'#ff8c22'
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color:'#212121',
                  borderColor:'#212121',
                  my:5
                }}
              >
                Talk to an expert
              </Button>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Story and Market Analysis</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Basic Financials</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Validation</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Customer Design</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Founder Grooming</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Financial Valuations</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Detailed Business Plan</Typography>
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
            p={4}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 150px #8888" }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing3.png" width={"80px"} />
              </Box>

              <Typography
                fontSize={"40px"}
                lineHeight={"72px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Series
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Stage{" "}
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color:'#ffff',
                    borderColor:'#ff8c22'
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color:'#212121',
                  borderColor:'#212121',
                  my:5
                }}
              >
                Talk to an expert
              </Button>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Story and Market Analysis</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Basic Financials</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Validation</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Customer Design</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Founder Grooming</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Financial Valuations</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Detailed Business Plan</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box px={15} bgcolor={"#f1f1f1"}>
        <Grid container justifyContent={"center"} spacing={4} pb={7}>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={4}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 5, m: 15, width: "85%" }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing1.png" width={"80px"} />
              </Box>

              <Typography variant="h4" fontWeight={600} textAlign={"center"}>
                Idea/MVP
                <Typography variant="body1" textAlign={"center"}>
                  Stage{" "}
                </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Story and Market Analysis</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Basic Financials</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Validation</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Customer Design</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Founder Grooming</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Financial Valuations</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Detailed Business Plan</Typography>
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
            p={4}
          >
            <Box bgcolor={"white"} sx={{ p: 3, width: "85%" }}>
              <img src="pricing2.png" width={"80px"} />
              <Typography variant="h4" fontWeight={600}>
                SEED
                <Typography variant="body1">Stage </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Typography>
                <CheckCircleOutlineIcon />
                Story and Market Analysis
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Basic Financials
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />1 Expert Review & Validation
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Customer Design
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Founder Grooming
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Financial Valuations
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Detailed Business Plan
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={4}
          >
            <Box bgcolor={"white"} sx={{ p: 2, width: "85%" }}>
              <img src="pricing3.png" width={"80px"} />
              <Typography variant="h4" fontWeight={600}>
                Series
                <Typography variant="body1">Stage </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Typography>
                <CheckCircleOutlineIcon />
                Story and Market Analysis
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Basic Financials
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />1 Expert Review & Validation
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Customer Design
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Founder Grooming
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Financial Valuations
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Detailed Business Plan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box px={15} bgcolor={"#f1f1f1"}>
        <Grid container justifyContent={"center"} spacing={4} pb={7}>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={4}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 5, m: 15, width: "85%" }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing1.png" width={"80px"} />
              </Box>

              <Typography variant="h4" fontWeight={600} textAlign={"center"}>
                Idea/MVP
                <Typography variant="body1" textAlign={"center"}>
                  Stage{" "}
                </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Story and Market Analysis</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Basic Financials</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Validation</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Customer Design</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Founder Grooming</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Financial Valuations</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <CheckCircleOutlineIcon />
                <Typography>Detailed Business Plan</Typography>
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
            p={4}
          >
            <Box bgcolor={"white"} sx={{ p: 3, width: "85%" }}>
              <img src="pricing2.png" width={"80px"} />
              <Typography variant="h4" fontWeight={600}>
                SEED
                <Typography variant="body1">Stage </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Typography>
                <CheckCircleOutlineIcon />
                Story and Market Analysis
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Basic Financials
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />1 Expert Review & Validation
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Customer Design
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Founder Grooming
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Financial Valuations
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Detailed Business Plan
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={4}
          >
            <Box bgcolor={"white"} sx={{ p: 2, width: "85%" }}>
              <img src="pricing3.png" width={"80px"} />
              <Typography variant="h4" fontWeight={600}>
                Series
                <Typography variant="body1">Stage </Typography>
              </Typography>
              <Box padding={"5px"} margin={"2px"} border={"2px solid black"}>
                <Typography>TALK TO AN EXPERT</Typography>
              </Box>
              <Typography>
                <CheckCircleOutlineIcon />
                Story and Market Analysis
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Basic Financials
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />1 Expert Review & Validation
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Customer Design
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Founder Grooming
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Financial Valuations
              </Typography>
              <Typography>
                <CheckCircleOutlineIcon />
                Detailed Business Plan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
};

export default PricingComparision;
