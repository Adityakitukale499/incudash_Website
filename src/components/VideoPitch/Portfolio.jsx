import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "18px",
        }}
        color={"#000000"}
      >
        Our Portfolio
        <br />
        <img src="Vector.png" alt="" />
      </Typography>

      <Box display={"flex"} my={5} justifyContent={"center"}>
        <img src="comapany.png " width={"75%"} />
      </Box>
    </>
  );
};

export default Portfolio;
