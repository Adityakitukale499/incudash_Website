import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Team = () => {
  return (
    <>
      <Typography variant="h4" fontWeight={600} textAlign={"center"} my={10}>
        The Team
        <br/>
        <div style={{display: "flex",justifyContent : "center" ,alignItems : "center" }} >
      <span style={{height:"3px",width : "60px", backgroundColor:"#FF8C22"}}  >


      </span>
        
      </div>
      </Typography>

     

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        px={20}
        pb={20}
       
      >
        <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"}  >
          {/* <Grid item xs={12} lg={5} px={4}>
            <Box border={"2px solid #f1f1f1"} padding={4}>
              <Box
                
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                pb={3}
                mt={2}
              >
                <img src="priyankamadnani.png" width={160}  />
               
                  <Typography variant="h6" fontWeight={600}>
                    Priyanka Madnani
                  </Typography>

                  <Typography variant="body1" mt={-2.5} >Founder & CEO</Typography>
                
              </Box>
              <Typography textAlign={"center"} mb={3}>
                She is a Mentor of Change at AIM, NITI Aayog Recognized with
                Indian Women Excellence and Leadership Award 2019 in E Commerce
                also Recognized with Women Excellence Award for Easy To Pitch in
                March 2020 at National Brand and Marketing Summit. She mentors
                founders to he pitch ready. She was among the top 30 Women
                Entrepreneurs to be incubated by WEE foundation or IIT Delhi.
              </Typography>
            </Box>
          </Grid> */}
          <Grid item xs={12} lg={4} px={4}>
            <Box border={"2px solid #f1f1f1"} padding={4} sx={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
              <Box
               
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                pb={3}
                mt={2}
              >
                <img src="priyankamadnani.png" width={160}  />
                
                <Typography variant="h6" fontWeight={600}>
                    Priyanka Madnani
                  </Typography>

                  <Typography variant="body1" mt={-2.5} >Founder & CEO</Typography>
               
              </Box>
              <Typography textAlign={"center"} mb={3}>
                She is a Mentor of Change at AIM, NITI Aayog Recognized with
                Indian Women Excellence and Leadership Award 2019 in E Commerce
                also Recognized with Women Excellence Award for Easy To Pitch in
                March 2020 at National Brand and Marketing Summit. She mentors
                founders to he pitch ready. She was among the top 30 Women
                Entrepreneurs to be incubated by WEE foundation or IIT Delhi.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={4} px={4} >
            <Box border={"2px solid #f1f1f1"} padding={4} sx={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
              <Box
              
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                pb={3}
                mt={2}
              >
                <img src="nikhilparmar.jpg" width={160} />
                
                  <Typography variant="h6" fontWeight={600}>
                    Nikhil Parmar
                  </Typography>

                  <Typography variant="body1" mt={-2} >Founder & CFO</Typography>
               
              </Box>
              <Typography textAlign={"center"} mb={7} height={"225px"}>
                Nikhil is a strategy and finance expert, post graduated from IM
                Udaipur. He is also an angel investor and has invested in
                startups like Fitspire. He is always most concerned about the
                value proposition and ensures that the startup is ready enough
                with all the questions on investor would ask.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Team;
