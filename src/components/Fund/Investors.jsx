import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Investors = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} textAlign={"center"} my={10}>
        Investors On Board
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{ height: "3px", width: "60px", backgroundColor: "#FF8C22" }}
          ></span>
        </div>
      </Typography>
      <Grid
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
      </Grid>
    </>
  );
};

export default Investors;
