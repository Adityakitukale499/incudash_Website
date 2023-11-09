import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Investors = () => {
  return (
    <>
      <Typography variant="h5"sx={{fontFamily: "Poppins" , fontWeight: 600 , fontSize: '28px' , lineHeight:"33.6pxpx" , textAlign: 'center'}} color={"#444444"} my={10}>
        Investors On Board
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:10
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