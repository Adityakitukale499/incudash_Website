import { Box, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('Hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        p: {
          lg: 8,
          md: 6,
          sm: 4,
          xs: 2,
        },
      }}
    >
      <Grid container sx={{ textAlign: "start" }}>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography
            variant="h6"
            fontWeight={800}
            height={50}
            mb={4}
            bgcolor={"white"}
          >
            Easy
            <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
              to pitch
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} lg={7.5}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            mx={{
              lg: 10,
              md: 8,
              sm: 5,
              xs: 1,
            }}
          >
            <Box>
              <Typography variant="body1" color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px'}}>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
                Toll-Free: 18003099044 <br />
                Email: info@easytopitch.com <br />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px'}}>
                ABOUT
              </Typography>

              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
                One stop solution <br />
                for pitching.We <br />
                make founders <br />
                pitch ready and <br />
                help you in <br />
                raising funds!
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px'}}>
                Our Services
              </Typography>

              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
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
              <Typography variant="body1" color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px'}}>
                Useful Links
              </Typography>
              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
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
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop:50
        }}
      >
        Copyright &copy; 2023&nbsp;
        <b style={{ padding: "0 5px" }}>Easy to Pitch</b>
      </p>
    </Box>
  );
};

export default Footer;
