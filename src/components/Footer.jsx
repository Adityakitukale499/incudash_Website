import { Box, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box  sx={{ backgroundImage: "url('Hero.png')", backgroundRepeat: "no-repeat",
    backgroundSize: "cover", p:8 }}>
      <Grid container sx={{ textAlign: "start"}}>
        <Grid
        
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography variant="h6" mb={5} fontWeight={800} height={50} bgcolor={"white"}>
            Easy
            <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
              to pitch
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} lg={8} >
          <Box display={"flex"} justifyContent={"space-between"} mx={15} >
            <Box>
              <Typography variant="body1" color={"orange"}>Contact Us</Typography>
              <Typography variant="body1">
                Toll-Free: 18003099044 <br />
                Email: info@easytopitch.com <br />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color={"orange"}>ABOUT</Typography>

              <Typography variant="body1">
                One stop solution <br />
                for pitching.We <br />
                make founders <br />
                pitch ready and <br />
                help you in <br />
                raising funds!
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" color={"orange"}>Our Services</Typography>

              <Typography variant="body1">
                Pitch Deck <br />
                Business <br />
                Plan <br />
                Financial <br />
                Projections <br />
                Demo Day <br />
                Founder <br />
                Grooming
              </Typography>
              </Box>

              <Box>
                <Typography variant="body1" color={"orange"}>Useful Links</Typography>
                <Typography variant="body1">
                  Home <br />
                  About Us <br />
                  Our Services <br />
                  Pricing <br />
                  Get Funded <br />
                  Video Pitch <br />
                  investors <br />
                  Blogs <br />
                  Contact Us
                </Typography>
              </Box>
            </Box>
          
        </Grid>
        
      </Grid>
      {/* <p style={{display: "flex" , justifyContent : "center" , textAlign : "center"}} > Copyright &copy; 2023 <b> Easy to Pitch </b></p> */}
      <p style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
  Copyright &copy; 2023&nbsp;<b style={{ padding: '0 5px' }}>Easy to Pitch</b>
</p>

    </Box>
  );
};

export default Footer;
