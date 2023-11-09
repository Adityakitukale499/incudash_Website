import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Funds = () => {
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
        <Grid container sx={{ width: "75%" }} gap={5}>
          <Grid item xs={12} lg={5.5}>
            <img src="funded.jpg" style={{ width: "100%" }} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: "32px",
                  lineHeight: "38.4px",
                }}
                color={"#444444"}
              >
                Are you looking for funding?
              </Typography>

              <br />
              <Typography
                sx={{
                  // mb: 1,
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                color={"#444444"}
              >
                A right investor is the one who not only provides you money but
                also  adds value to your startup. Now, it's time to meet
                your right investors.
              </Typography>
              <br />
              <Typography
                sx={{
                  // mb: 1,
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                color={"#444444"}
              >
                Let us help you connect to the well known investors where we
                commit  that we will share a pitch ready startup and
                hence, ensuring there is no rejection.
              </Typography>
              
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                color={"#444444"}
              >
                So, stop your struggle here. Let us help you get funded and we
                won't charge anything before you successfully raise
                funds.
              </Typography>
              <br />
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
                color={"#444444"}
              >
                Mail us your pitch deck on{" "}
                <sapn style={{ color: "#FF8C22" }}>[email protected]</sapn>{" "}
                <br /> OR <br /> Fill: http://bit.ly/etp_getfunded.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Funds;
