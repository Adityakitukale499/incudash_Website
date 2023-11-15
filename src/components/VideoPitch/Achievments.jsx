import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Achievment = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Grid
          container
          gap={2}
          sx={{
            p: 10,
            textAlign: "center",
            bgcolor: "#F5F7FA",
            // px: 20,
            color: "#212121",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item lg={2.1} xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
                // textAlign:'center'
              }}
            >
              500+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Startup Served
            </Typography>
          </Grid>
          <Grid item lg={2.1} xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              5000+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Decks Reviewed
            </Typography>
          </Grid>
          <Grid item lg={2.1} xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Ecosystem Partners
            </Typography>
          </Grid>
          <Grid item lg={2.1} xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              1000+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Founders Gromed
            </Typography>
          </Grid>
          <Grid item lg={2.1} xs={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              21+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Cities Reached
            </Typography>
          </Grid>
          {/* <Grid item lg={2} xs={4}></Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Achievment;
