import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const VideoBody = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000000" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="h6" fontWeight={600} color={"#fff"}>
                10X YOUR CHANCES OF <br /> FUNDING WITH OUR
              </Typography>
              <Typography variant="h5" fontWeight={600} color={"orange"}>
                VIDEO PITCH DECK
              </Typography>
              <br />
              <Typography color={"#fff"}>
                Bring life to your Pitch deck with our Video Pitches to share{" "}
                <br /> your story and passion with the investors in a dynamic
                way so <br /> that you standout Infront of them.
              </Typography>

              <Button
                variant="outlined"
                sx={{'&:hover': {
                  outline:'#ff8c22',
                  border:'1px solid #ff8c22',
             }
                , color: "orange", borderColor: "orange", mt: 2 }}
              >
                Call Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src="Website.jpg" />
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h4"
        my={5}
        sx={{ textAlign: "center", fontWeight: 700 }}
      >
        Our Services
      </Typography>
      <Grid container px={10} my={5}>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Video Pitch for Demo days
            </Typography>
            <Typography variant="body1" color="initial">
              Demo day being one of the crucial events organised by incubators,
              accelerators and VCs, holds immense significance in your
              investment journey. We will help you create the ideal video pitch
              for you to present your story flawlessly.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Video Pitch Deck for Investment
            </Typography>
            <Typography variant="body1" color="initial">
              On the D-Day, creating an impact and catching the investors
              attention is not an easy game. We help you make it easy by helping
              you shape your story in words that won't fail. From creating the
              script, helping you present, to even editing the video, we have
              got you covered.
            </Typography>
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
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Product Demo Video Pitch
            </Typography>
            <Typography variant="body1" color="initial">
              In order to dispense your product to other business, you need to
              highlight the product's attributes clearly. We help you tailor
              your product description using the night approach and
              methodologies
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Sales Video Pitch
            </Typography>
            <Typography variant="body1" color="initial">
              By making a sales video pitch, you create a more compelling,
              human, and engaging Image of your product to end customer. Contact
              us today to create your ultimate product video to start marketing
              and promoting your product.
            </Typography>
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
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
      </Grid>
      <Grid container px={10}>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Animated Video
            </Typography>
            <Typography variant="body1" color="initial">
              An animated video pitch helps you visualise your idea graphically.
              It makes your idea pleasing enough to the investors, for them to
              understand in a gimpse. We help you to demonstrate your startup
              story through animations
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={8} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              color="initial"
              textAlign={"center"}
              fontWeight={600}
            >
              Commercial ads Video
            </Typography>
            <Typography variant="body1" color="initial">
              A short-form video that briefly describes your product, service or
              brand promise is the key to sell. We help you reach the consumer,
              showcasing the necessity of your product through a relatable and
              emotionally approachable manner.
            </Typography>
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
          <img src="Frame4104.png" style={{ height: 200 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoBody;
