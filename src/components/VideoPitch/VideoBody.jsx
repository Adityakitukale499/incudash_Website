import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const VideoBody = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000000" }}>
        <Grid container gap={2} >
          <Grid
            item
            xs={12}
            lg={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="h6" sx={{fontFamily : "Raleway" , fontWeight: 500, fontSize:"24px" }} color={"#FFFFFF"} >
              <span style={{fontFamily : "Raleway" , fontWeight: 700, fontSize:"24px" }} color={"#FFFFFF"} >
              10X 
              </span>
              
               YOUR CHANCES OF <br /> FUNDING WITH OUR
              </Typography>
              <Typography variant="h5" sx={{fontFamily : "Raleway" , fontWeight: 700, fontSize:"24px" }} color={"#FF8C22"} >
                VIDEO PITCH DECK
              </Typography>
              <br />
              <Typography sx={{fontFamily : "Raleway" , fontWeight: 400, fontSize:"12px" }} color={"#FFFFFF"}>
                Bring life to your Pitch deck with our Video Pitches to share{" "}
                <br /> your story and passion with the investors in a dynamic
                way so <br /> that you standout Infront of them.
              </Typography>

              <Button
                variant="outlined"

                
                sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"15px" , '&:hover': {
                  outline:'#ff8c22',
                  border:'1px solid #ff8c22',
             }
                , color: '#ff8c22', borderColor: "#ff8c22", mt: 2 }}
              >
                Call Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5} display={"flex"} justifyContent={"center"}>
            <img src="Website.jpg" style={{width: '497px',
height: '497px',
}}/>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h4"
        my={5}
        sx={{ textAlign: "center", fontFamily : "Poppins" , fontWeight: 700, fontSize:"28px"}} color={"#444444"}
      >
        Our Services
        <br/>
        <div style={{display: "flex",justifyContent : "center" ,alignItems : "center" }} >
      <span style={{height:"3px",width : "50px", backgroundColor:"#FF8C22"}}  >


      </span>
        
      </div>
      </Typography>
      <Grid container px={10} my={5}>
        <Grid
          item
          xs={12}
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: "270px" , width: "270px" }} />
        </Grid>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
             
              
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Video Pitch for Demo days
            </Typography>
            <Typography variant="body1"  sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
              Demo day being one of the crucial events organised by incubators,
              accelerators and VCs, holds immense significance in your
              investment journey. We will help you create the ideal video pitch
              for you to present your story flawlessly.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              
              textAlign={"center"}
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Video Pitch Deck for Investment
            </Typography>
            <Typography variant="body1" sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
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
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: "270px" , width: "270px" }}/>
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid
          item
          xs={12}
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: "270px" , width: "270px" }} />
        </Grid>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              
              textAlign={"center"}
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Product Demo Video Pitch
            </Typography>
            <Typography variant="body1" sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
              In order to dispense your product to other business, you need to
              highlight the product's attributes clearly. We help you tailor
              your product description using the night approach and
              methodologies
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
             
              textAlign={"center"}
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Sales Video Pitch
            </Typography>
            <Typography variant="body1" sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
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
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: "270px" , width: "270px" }} />
        </Grid>
      </Grid>
      <Grid container px={10}>
        <Grid
          item
          xs={12}
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png" style={{ height: "270px" , width: "270px" }} />
        </Grid>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
             
              textAlign={"center"}
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Animated Video
            </Typography>
            <Typography variant="body1" sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
              An animated video pitch helps you visualise your idea graphically.
              It makes your idea pleasing enough to the investors, for them to
              understand in a gimpse. We help you to demonstrate your startup
              story through animations
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container px={10} my={5}>
        <Grid item xs={12} lg={7} p={5}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h6"
              
              textAlign={"center"}
              sx={{ textAlign: "center", fontFamily : "Raleway" , fontWeight: 500, fontSize:"32px"}} color={"#444444"}
            >
              Commercial ads Video
            </Typography>
            <Typography variant="body1" sx={{ fontFamily : "Open Sans" , fontWeight: 400, fontSize:"16px"}} color={"#444444"}>
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
          lg={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="Frame4104.png"style={{ height: "270px" , width: "270px" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoBody;
