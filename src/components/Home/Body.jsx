import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Body = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
        color: "#212121",
      }}
    >
      <Grid container sx={{ width: "75%" }}>
        <Grid
          item
          xs={12}
          lg={4.8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="Top_Lapy.png"
            style={{ width: "80%", maxWidth: "320px", height: "230px" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "32px",
              }}
            >
              Let us be a part of your startup journey!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                my: 1,
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              We make founders pitch ready. Build your startup story and not
              just a pitch deck. Get your Financial Valuations and Projections
              perfect Customized jaw-dropping presentations with best design and
              crisp content to raise capital.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Depending on the sector, stage and market of your startup, Easy to
              Pitch builds your investment pitch deck presentation that is
              designed to tell your startup story in the best way possible to
              investors in order to face less rejections.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
