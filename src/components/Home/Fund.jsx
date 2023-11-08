import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

const Fund = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", color:'#545454' }}>
      <Grid container sx={{ width: "80%",gap:5 }}>
        <Grid item xs={12} lg={3.8}>
          <Box
            sx={{
              bgcolor: "orange",
              color: "white",
              p: 3,
              m: 1,
             
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 200 }}
            >
              Toll Free
            </Typography>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 200 }}
            >
              Number:
            </Typography>

            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: 200 }}
            >
              18003099044
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={7.5}>
          <Box sx={{ p: 1, px: 3 }}>
            <Typography variant="h4" sx={{}}>
              Looking for funds?
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Yes, we now not only make you pitch perfect but ensure you reach
              your destination. We are here for you to help you raise funds from
              the right investor who not only funds you but also adds good value
              to your venture.
            </Typography>

            <Typography variant="body1">
              Let us bridge this gap of connecting founders with investors.
            </Typography>
            <Button variant="text" sx={{ color: "orange",p:0,my:2 }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Fund;
