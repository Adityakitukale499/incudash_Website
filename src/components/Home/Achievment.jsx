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
          // gap={2}
          sx={{
            p: 10,
            textAlign: "center",
            bgcolor: "#F5F7FA",
            // px: 20,
            color: "#212121",
            display: "flex", justifyContent: "center", textAlign: "center" 
          }}
        >
          <Grid item lg={2.4} xs={10} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
                textAlign:'center'
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
          <Grid item lg={2.4} xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              5000+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Decks Reviewed
            </Typography>
          </Grid>
          <Grid item lg={2.4} xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              200+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Ecosystem Partners
            </Typography>
          </Grid>
          <Grid item lg={2.4} xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              1000+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Founders Gromed
            </Typography>
          </Grid>
          <Grid item lg={2.4} xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "40px",
              }}
            >
              21+
            </Typography>
            <Typography
              variant="body2"
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

    //     <Grid container spacing={2} justifyContent="space-between" sx={{ my: 1, py: 3, textAlign: 'center', bgcolor: "#F5F7FA" }}>
    //   <Grid item lg={2.4} xs={4}>
    //     <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 50 }}>
    //       500+
    //     </Typography>
    //     <Typography variant="caption">Startup Served</Typography>
    //   </Grid>
    //   <Grid item lg={2.4} xs={4}>
    //     <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 40 }}>
    //       5000+
    //     </Typography>
    //     <Typography variant="caption">Decks Reviewed</Typography>
    //   </Grid>
    //   <Grid item lg={2.4} xs={4}>
    //     <Typography variant="h3" sx={{ fontWeight: 600 }}>
    //       200+
    //     </Typography>
    //     <Typography variant="caption">Ecosystem Partners</Typography>
    //   </Grid>
    //   <Grid item lg={2.4} xs={4}>
    //     <Typography variant="h3" sx={{ fontWeight: 600 }}>
    //       1000+
    //     </Typography>
    //     <Typography variant="caption">Founders Groomed</Typography>
    //   </Grid>
    //   <Grid item lg={2.4} xs={4}>
    //     <Typography variant="h3" sx={{ fontWeight: 600 }}>
    //       21+
    //     </Typography>
    //     <Typography variant="caption">Cities Reached</Typography>
    //   </Grid>
    // </Grid>
  );
};

export default Achievment;
