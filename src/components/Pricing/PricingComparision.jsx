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
            px={{ lg: 4, md: 2, xs: 0 }}
            py={3}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888",height:'100%' }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing1.png" width={"80px"} />
              </Box>

              <Typography
                fontSize={"40px"}
                lineHeight={"50px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Basic Package 
              </Typography>
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Starting at
                </Typography>
              <Typography
                fontSize={"24px"}
                lineHeight={"24px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
               $599/mo
                <Typography
                  fontSize={"14px"}
                  lineHeight={"22.4px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  lorem ipsum dolor
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color: "#ffff",
                    borderColor: "#ff8c22",
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color: "#212121",
                  borderColor: "#212121",
                  p: 2.5,
                  mb: 5,
                }}
              >
                Talk to an expert
              </Button>
              <Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {/* Story and Market Analysis */}
                    Pitch Deck
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {/* <>Basic Financials</> */}
                    Financial Valuations 
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {/* <>Validation</> */}
                    Investor's Connect (Complimentary)
                  </Typography>
                </Box>
       
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
            px={{ lg: 4, md: 2, xs: 0 }}
            py={3}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888",height:'100%' }}
              display={"flex"}
              // justifyContent={'center'}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing2.png" width={"80px"} />
              </Box>
              <Typography
                fontSize={"40px"}
                lineHeight={"50px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Advance Package 
              </Typography>
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Starting at
                </Typography>
              <Typography
                fontSize={"24px"}
                lineHeight={"24px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
               $599/mo
                <Typography
                  fontSize={"14px"}
                  lineHeight={"22.4px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  lorem ipsum dolor
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color: "#ffff",
                    borderColor: "#ff8c22",
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color: "#212121",
                  borderColor: "#212121",
                  p: 2.5,
                  mb: 5,
                }}
              >
                Talk to an expert
              </Button>
              <Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {/* Story and Market Analysis */}
                    Pitch Deck
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {/* <>Basic Financials</> */}
                    Financial Valuations
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {/* <>Validation</> */}
                    Investor's Connect (Complimentary)
                  </Typography>
                </Box>
                
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
            px={{ lg: 4, md: 2, xs: 0 }}
            py={3}
          >
            <Box
              bgcolor={"white"}
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888",height:'100%' }}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img src="pricing3.png" width={"80px"} />
              </Box>

              <Typography
                fontSize={"40px"}
                lineHeight={"50px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
                Founder Grooming 
              </Typography>
                <Typography
                  fontSize={"14px"}
                  lineHeight={"14px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  Starting at
                </Typography>
              <Typography
                fontSize={"24px"}
                lineHeight={"24px"}
                fontWeight={600}
                textAlign={"center"}
                fontFamily={"Montserrat"}
                color={"#212121"}
              >
               $599/mo
                <Typography
                  fontSize={"14px"}
                  lineHeight={"22.4px"}
                  fontWeight={400}
                  textAlign={"center"}
                  fontFamily={"Montserrat"}
                  color={"#333333"}
                >
                  lorem ipsum dolor
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                    color: "#ffff",
                    borderColor: "#ff8c22",
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "100%",
                  height: "33px",
                  borderRadius: "0",
                  color: "#212121",
                  borderColor: "#212121",
                  p: 2.5,
                  mb: 5,
                }}
              >
                Talk to an expert
              </Button>
              <Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                   Get 3 Sessions
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {/* <>Basic Financials</> */}
                    Discuss On Various Red Flag
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                   Expansion Strategies
                  </Typography>
                </Box>
                {/* <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    <>Customer Design</>
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    <>Founder Grooming</>
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}>
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    <>Financial Valuations</>
                  </Typography>
                </Box>
                <Box display={"flex"} gap={1} my={1}> 
                  <CheckCircleOutlineIcon />
                  <Typography
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontFamily: "Montserrat ,sans-serif ",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    <>Detailed Business Plan</>
                  </Typography>
                </Box>*/}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PricingComparision;
