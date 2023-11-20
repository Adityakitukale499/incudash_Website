import { Box, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Team = () => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "33.6px",
          textAlign: "center",
          color: "#444444",
        }}
        my={10}
      >
        The Team
              <br/>
            <img src="Vector.png" alt="" />
        {/*
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <span
            style={{ height: "3px", width: "50px", backgroundColor: "#FF8C22" }}
          ></span>
        </div> */}
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        px={{ lg: 20, md: 15, xs: 5 }}
        pb={20}
      >
        {/* <Grid
          container
          gap={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={12} lg={4} px={4}>
            <Box
              border={"2px solid #f1f1f1"}
              padding={4}
              sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                // gap={2}
                pb={2}
                mt={2}
              >
                <img
                  src="priyankamadnani.png"
                  style={{
                    width: "186px",
                    height: "182px",
                    borderRadius: "92px",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    textAlign: "center",
                    color: "#444444",
                  }}
                  mt={3}
                >
                  Priyanka Madnani
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "19.5px",
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#444444",
                  }}
                >
                  Founder & CEO
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#aaaaaa",
                  height: "230px",
                  overflowY: "scroll",
                }}
              >
                She is a Mentor of Change at AIM, NITI Aayog Recognized with
                Indian Women Excellence and Leadership Award 2019 in E Commerce
                also Recognized with Women Excellence Award for Easy To Pitch in
                March 2020 at National Brand and Marketing Summit. She mentors
                founders to he pitch ready. She was among the top 30 Women
                Entrepreneurs to be incubated by WEE foundation or IIT Delhi.
              </Typography>
            </Box>
          </Grid>

           <Grid item xs={12} lg={4} px={4}>
            <Box
              border={"2px solid #f1f1f1"}
              padding={4}
              sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                // gap={2}
                pb={2}
                mt={2}
              >
                <img
                  src="nikhilparmar.jpg"
                  style={{
                    width: "186px",
                    height: "182px",
                    borderRadius: "93px",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    textAlign: "center",
                    color: "#444444",
                  }}
                  mt={3}
                >
                  Nikhil Parmar
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "19.5px",
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#444444",
                  }}
                >
                  Founder & CFO
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#aaaaaa",
                  height: "230px",
                  overflowY: "scroll",
                }}
              >
                Nikhil is a strategy and finance expert, post graduated from IM
                Udaipur. He is also an angel investor and has invested in
                startups like Fitspire. He is always most concerned about the
                value proposition and ensures that the startup is ready enough
                with all the questions on investor would ask.
              </Typography>
            </Box>
          </Grid> 
        </Grid> */}

        <Box
          border={"2px solid #f1f1f1"}
          padding={4}
          sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        >
          <Grid container>
            <Grid
              item
              lg={4}
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"} p={1}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                // gap={2}
                pb={2}
                mt={2}
              >
                <img
                  src="priyankamadnani.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "92px",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "21.6px",
                    textAlign: "center",
                    color: "#FF8C22",
                    px: 4,
                  }}
                  mt={2}
                >
                  Hello! <br /> I Am Priyanka Madnani Founder And Chif
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  color={"#FF8C22"}
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />

                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: "19.5px",
                      // textAlign: "center",
                      fontStyle: "italic",
                    }}
                  >
                    32K+ Followers
                  </Typography>
                </Box>
              </Box>
              <Box display={{lg:'flex',xs:'none'}} justifyContent={"end"} px={4}>
                <img src="easytopitchLogo.png" alt="logo" />
              </Box>
            </Grid>
            <Grid item lg={8} xs={12}p={1}>
              <Box display={"flex"} justifyContent={"end"} mb={'85px'}>
                <Typography
                  sx={{
                    bgcolor: "#FF8C22",
                    width: {lg:"90%",xs:'100%'},
                    color: "#fff",
                    py: 1,
                    px: 4,
                    textAlign: "end",
                    borderRadius: 10,
                    fontWeight: 550,
                    fontStyle: "italic",
                  }}
                >
                  "I bring a decade of experience with making 10,000+ Startups
                  Pitch Ready at Easy To Pitch Globally"
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  // color: "#aaaaaa",
                  my:1
                }}
              >
                Priyanka Madnani is an experienced startup advisor and pitch
                expert in India and at global platforms, having helped over
                10,000+ startups turn their ideas into successful pitch stories
                through her brand, <span style={{fontSize: "14px",fontWeight:700}}> Easy To Pitch, a Venture Catalyst backed
                firm.</span> 
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  // color: "#aaaaaa",
                  my:1
                }}
              >
                She has been recognised on multiple platforms for her expertise
                in startup validation and fundraising, and has won multiple
                excellence awards.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  // color: "#aaaaaa",
                  my:1
                }}
              >
                Priyanka is a sought-after speaker and mentor for top
                institutions in India, including IITs, IIMs, and DU. Priyanka's
                expertise in startup validation and fundraising has earned her
                recognition on multiple platforms, including Josh Talk, and she
                has been featured in over 30 media publications, including
                YourStory and ET Times. She is a mentor of change in Niti Aayog
                aswell. Her recognitions has extended to oversees aswell.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  // color: "#aaaaaa",
                  mt:1
                }}
              >
                She has recently ventured into <span style={{fontSize: "14px",fontWeight:700}}> Terex</span>  to help investors get
                powerful investment opportunities with potential and promising
                startups. She has past record of getting <span style={{fontSize: "14px",fontWeight:700}}>7 startups invested
                from her network of investors such as Hesa, Fitspire and more.</span> 
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Team;
