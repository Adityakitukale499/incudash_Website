import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSpring, animated } from "react-spring";

const Achievment = () => {
  function Number({ num }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: num,
      delay: 100,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#F5F7FA",
          py: 6,
        }}
      >
        <Box sx={{ width: "80%", pb: 3 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Montserrat ,sans-serif",
              fontSize: "32px",
              textAlign: "center",
              lineHeight:'32px',
            }}
          >
            We Are Growing <br/>
            <img src="Vector.png" alt="" />
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Montserrat ,sans-serif",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            We focus on every industry space. Once associated, we ensure that
            your startup becomes pitch perfect.
          </Typography>
        </Box>
        <Grid
          container
          gap={2}
          sx={{
            // px: 10,
            textAlign: "center",
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
              }}
            >
              {/* 8000+ */}
              <Number num={8000} />+
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
              {/* 10000+ */}
              <Number num={10000} />+
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
              {/* 400+ */}
              <Number num={400} />+
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
              {/* 5000+ */}
              <Number num={5000} />+
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
              {/* 50,000+ */}
              <Number num={50000} />+
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              Founders Community
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Achievment;
