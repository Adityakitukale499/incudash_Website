import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const NeedVideo = () => {
  return (
    <>
      <Box backgroundColor={"#f1f1f1"}>
        <Typography
          pt={8}
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "28px",
            textAlign: "center",
          }}
          color={"#444444"}
        >
          Why you need Video Pitch.
              <br/>
            <img src="Vector.png" alt="" />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                height: "3px",
                width: "50px",
                backgroundColor: "#FF8C22",
              }}
            ></span>
          </div> */}
        </Typography>

        <Grid container justifyContent="center" p={7}>
          <Grid
            item
            xs={12}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                m: 2,
                width: "85%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img src="VideoPitch.png" width="100%" />
              <Box p={1} textAlign="start">
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 500,
                    fontSize: "24px",
                  }}
                  color={"#FF8C22"}
                >
                  Set Yourself Apart
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    height: "80px",
                    overflowY: "scroll",
                  }}
                  color={"#444444"}
                >
                  Investor inboxes are flooded with Pitch Decks. It's necessary
                  for you to set your pitch deck apart.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                m: 2,
                width: "85%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img src="VideoPitch2.png" width="100%" />
              <Box p={1} textAlign="start">
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 500,
                    fontSize: "24px",
                  }}
                  color={"#FF8C22"}
                >
                  Showcase Story & passion
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    height: "80px",
                    overflowY: "scroll",
                  }}
                  color={"#444444"}
                >
                  A video helps bring your pitch to life. You can share your
                  story and passion with investors in a dynamic way.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                m: 2,
                width: "85%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img src="Untitleddesign.jpg" width="100%" />
              <Box p={1} textAlign="start">
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 500,
                    fontSize: "24px",
                  }}
                  color={"#FF8C22"}
                >
                  Investors want Video Pitches
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    height: "80px",
                    overflowY: "scroll",
                  }}
                  color={"#444444"}
                >
                  Top accelerator programs have started to require or encourage
                  startups to include a pitch video as part of their
                  application.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NeedVideo;
