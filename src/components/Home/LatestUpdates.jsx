import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const LatestUpdates = () => {
  return (
    <>
      <Box
        textAlign={"center"}
        px={10}
        justifyContent={"center"}
        bgcolor={"#F5F7FA"}
        color={'#212121'}
      >
        <Typography variant="h4" fontSize={36} fontWeight={600} pt={8} >
          Latest Updates
        </Typography>

        <Typography my={2} variant="h6" mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse tincidunt sagittis eros. Quisque quis euismod <br />{" "}
          lorem.
        </Typography>

        <Grid container justifyContent={"center"} spacing={4} pb={7}>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: "85%" }}>
              <img src="Full name.png" width={"100%"} />
              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" fontWeight={600}>
                  Full name
                </Typography>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: "85%" }}>
              <img src="Full name2.png" width={"100%"} />

              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" fontWeight={600}>
                  Full name
                </Typography>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgcolor={"white"} sx={{ m: 2, width: "85%" }}>
              <img src="Full name3.png" width={"100%"} />

              <Box p={3} textAlign={"start"}>
                <Typography variant="h5" fontWeight={600}>
                  Full name
                </Typography>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestUpdates;
