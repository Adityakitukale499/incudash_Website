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
          xs: 0,
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
          {/* <Typography
            variant="h6"
            fontWeight={800}
            height={50}
            my={4}
            bgcolor={"white"}
          >
            Easy
            <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
              to pitch
            </Typography>
          </Typography> */}
          <img src="easytopitchLogo.png" alt="companyLogo" height={50} style={{margin:'25px 0'}}/>
        </Grid>

        <Grid item xs={12} lg={7.5}>
          <Grid container p={2} mx={{
              lg: 8,
              md: 5,
              sm: 0,
              xs: 0,
            }}>
            <Grid item lg={4} xs={5.5} mb={2} sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{textAlign:'start',pl:8}}>
              <Typography variant="body1" color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px',mb:1}}>
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'28px'}}>
                Toll-Free: 18003099044 <br />
                Email: info@easytopitch.com <br />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Typography>
            </Box>
            </Grid>
            <Grid item lg={2.6} xs={5.5}  mb={2} sx={{display:'flex', justifyContent:'center'}} >
            <Box sx={{textAlign:'start', pl:5}}>
              <Typography color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px',mb:1}}>
                ABOUT
              </Typography>

              <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'28px'}}>
                One stop solution <br />
                for pitching.We <br />
                make founders <br />
                pitch ready and <br />
                help you in <br />
                raising funds!
              </Typography>
            </Box>
            </Grid>
            <Grid item lg={2.6} xs={5.5} mb={2} sx={{display:'flex', justifyContent:'center'}} >
            <Box sx={{textAlign:'start'}}>
              <Typography  color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px',mb:1}}>
                Our Services
              </Typography>

              <Typography  sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'28px'}}>
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
            </Grid>
            <Grid item lg={2.6} xs={5.5} mb={2} sx={{display:'flex', justifyContent:'center'}} >
            <Box sx={{textAlign:'start'}}>
              <Typography  color={"#FF8C22"} sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'14px',lineHeight:'21px',mb:1}}>
                Useful Links
              </Typography>
              <Typography sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'28px'}}>
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
            </Grid>
          </Grid>
          {/* <Box
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
          </Box> */}
        </Grid>
      </Grid>
      {/* <p style={{display: "flex" , justifyContent : "center" , textAlign : "center"}} > Copyright &copy; 2023 <b> Easy to Pitch </b></p> */}
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop:20
        }}
      >
        Copyright &copy; 2023&nbsp;
        <b style={{ padding: "0 5px" }}>Easy to Pitch</b>
      </p>
    </Box>
  );
};

export default Footer;
