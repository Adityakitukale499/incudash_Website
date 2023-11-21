import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Body = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 10,
          color: "#212121",
        }}
      >
        <Grid container sx={{ width: "80%" }} gap={5}>
          <Grid item xs={12} lg={5}>
            <img src="MainSection.jpg" style={{ width: "100%" }} />
          </Grid>

          <Grid item xs={12} lg={6.5}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "26px",
                  lineHeight: "32px",
                  fontFamily: "Montserrat",
                }}
              >
                Let us be a part of your startup journey!
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontFamily: "Montserrat",
                }}
              >
                We make founders pitch ready.
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontFamily: "Montserrat",
                }}
              >
                As we know, at an early stage for startups it becomes difficult
                for founders to spend considerable capital to hire graphic
                designers to design their pitch decks or paying agencies for
                finances or onboarding mentors with stakes. We make it easy for
                startups by creating well researched and impeccably designed
                pitch decks at a very minimal cost, which will help them make
                the most out of their funding opportunities.
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontFamily: "Montserrat",
                }}
              >
                We, at Easy To Pitch focus on every industry space and our
                association with{" "}
                <span style={{ fontWeight: 800 }}>500+ startups</span> proves
                that. Once associated, we will ensure that your startup becomes
                pitch-perfect. Not only this we are a team that includes
                <span style={{ fontWeight: 800 }}>IIMians</span> with various
                domain expertise.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
