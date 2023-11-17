import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSpring, animated } from "react-spring";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    height: 10,
    backgroundColor: theme.palette.mode === "light" ? "orange" : "#308fe8",
  },
}));
function Number({num}){
  const {number} = useSpring({
    from: {number:0},
    number:num,
    delay:100,
    config:{mass:1 , tension: 20, friction: 10},
  })
  return number.to((n)=> n.toFixed(0))
}

const VideoHelp = () => {
 
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "28px",
          textAlign: "center",
        }}
        color={"#444444"}
        mt={10}
      >
        What we help you with
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <span
            style={{ height: "3px", width: "50px", backgroundColor: "#FF8C22" }}
          ></span>
        </div>
      </Typography>

      <Grid container p={5} px={{lg:15,md:5,xs:1.5}}>
        <Grid item xs={12} lg={6} p={2} px={2}>
          <Typography
            variant="body1"
            sx={{
              margin: "0 auto",
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "16px",
              fontStyle: "italic",
            }}
            color={"#444444"}
          >
            We are a team of talented experts, analysts, and designers with
            experience across multiple domains. We know that raising funds is
            not an easy task. We at Easy To Pitch help you to overcome all the
            hurdles in your fundraising journey. We assist you in every step, be
            it making your documents or connecting you with the right investor
            for your startup.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} px={2}>
          <Box display={"flex"} justifyContent={"space-between"} my={1}>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              PITCH DECK
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              100%
            </span>
          </Box>

          <BorderLinearProgress variant="determinate" value={100} />

          <Box display={"flex"} justifyContent={"space-between"} my={1} mt={2}>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              PROJECTIONS
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              90%
            </span>
          </Box>
          <BorderLinearProgress variant="determinate" value={90} />

          <Box display={"flex"} justifyContent={"space-between"} my={1} mt={2}>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              NETWORK
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              75%
            </span>
          </Box>
          <BorderLinearProgress variant="determinate" value={75} />

          <Box display={"flex"} justifyContent={"space-between"} my={1} mt={2}>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              FUNDING
            </span>
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "12px",
              }}
              color={"#545454"}
            >
              50%
            </span>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoHelp;
