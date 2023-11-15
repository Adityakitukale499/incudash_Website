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
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888" }}
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
                  my: 5,
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
                      fontSize: "12px",
                    }}
                  >
                    Story and Market Analysis
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
                      fontSize: "12px",
                    }}
                  >
                    <>Basic Financials</>
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
                      fontSize: "12px",
                    }}
                  >
                    <>Validation</>
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
                    }}
                  >
                    <>Detailed Business Plan</>
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
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888" }}
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
                  my: 5,
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
                      fontSize: "12px",
                    }}
                  >
                    Story and Market Analysis
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
                      fontSize: "12px",
                    }}
                  >
                    <>Basic Financials</>
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
                      fontSize: "12px",
                    }}
                  >
                    <>Validation</>
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
                    }}
                  >
                    <>Detailed Business Plan</>
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
              sx={{ p: 3, width: "100%", boxShadow: "1px 1px 80px #8888" }}
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
                  my: 5,
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
                      fontSize: "12px",
                    }}
                  >
                    Story and Market Analysis
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
                      fontSize: "12px",
                    }}
                  >
                    <>Basic Financials</>
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
                      fontSize: "12px",
                    }}
                  >
                    <>Validation</>
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
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
                      fontSize: "12px",
                    }}
                  >
                    <>Detailed Business Plan</>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PricingComparision;
