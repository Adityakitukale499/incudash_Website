import { Box, Grid, Typography } from "@mui/material";
import React from "react";


const TestimonialSection = () => {
  return (
    <>
      <Typography variant="h4" fontWeight={600} textAlign={"center"} my={10}>
        Testimonial Section
      </Typography>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}  px={20}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} px={4}  >
          <Box border={"2px solid #f1f1f1"} padding={4}>
            <Typography textAlign={"start"} mb={5}>
              "Easy To Pitch and its cohort helped  us to be pitch ready
              and grooming.  The team and the founder helped  us a
              lot in making the right pitch  deck due to which we were
              able to  have a better pitch in front of  the
              investors."
            </Typography>
          

          <Box bgcolor={"#f1f1f1"} display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} p={3} mt={2}>
            <img src="Co1.png" width={60} height={70} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Pramudit <br />
                Somvanshi
              </Typography>

              <Typography variant="body2">
                Co-Founder at <br /> Ingenium Education
              </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4} px={4} >
        <Box border={"2px solid #f1f1f1"} padding={4}>
            <Typography textAlign={"start"} mb={4}>
            "Easy to pitch helped us in creating the pitch deck crisp,
              clear and concise. Especially, the financial 
              projections are made easy with their expertise, I highly
              recommend for every new founder to use their service
              not only for creating the pitch deck but also to get
              clarity on their idea first."
            </Typography>
          

          <Box bgcolor={"#f1f1f1"} display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} p={3} mt={2}>
            <img src="Co2.png" width={60} height={70} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
              Sulaiman  <br/> Mmd
              </Typography>

              <Typography variant="body2">
              Co-Founder & CEO at  <br/> BiryBox
              </Typography>
            </Box>
          </Box>
          </Box>
          
        </Grid>

        <Grid item xs={12} lg={4} px={4} >
        <Box border={"2px solid #f1f1f1"} padding={4}>
            <Typography textAlign={"start"} mb={4}>
            "It was a great experience, the team 
             was always on toes. They helped us :
              to align the story and the pitch 
              together. Moreover they gave so many 
              insightful suggestions when It was
               about the fundraise. Keep up the good work"
            </Typography>
          

          <Box bgcolor={"#f1f1f1"} display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} p={3} mt={2}>
            <img src="Co3.png" width={60} height={70} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
              Vaibhav <br/> Gupta
              </Typography>

              <Typography variant="body2">
              Co-founder at <br/> Medicalwale.com
              </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>

        
      </Grid>

      </Box>

     
    </>
  );
};

export default TestimonialSection;
