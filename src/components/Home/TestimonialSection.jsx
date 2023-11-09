// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";

// const Testimonial = () => {
//   return (
//     <>
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           fontFamily: "Montserrat",
//           fontWeight: 700,
//           fontSize: {
//             lg: "32px",
//             md: "30px",
//             sm: "25px",
//             xs: "25px",
//           },
//         }}
//         color={"#000000"}
//         my={{
//           lg: 10,
//           md: 8,
//           sm: 6,
//           xs: 5,
//         }}
//       >
//         Testimonial Section
//       </Typography>

//       <Box
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         px={{
//           lg: 20,
//           md: 15,
//           sm: 10,
//           xs: 5,
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid
//             item
//             xs={12}
//             lg={4}
//             px={{
//               lg: 4,
//               md: 3,
//               sm: 2,
//               xs: 1,
//             }}
//           >
//             <Box border={"2px solid #f1f1f1"} p={4}>
//               <Typography
//                 textAlign={"start"}
//                 sx={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 400,
//                   fontSize: "14px",
//                 }}
//                 color={"#000000"}
//                 mb={5}
//                 lineHeight={"21px"}
//               >
//                 "Easy To Pitch and its cohort helped us to be pitch ready and
//                 grooming. The team and the founder helped us a lot in making the
//                 right pitch deck due to which we were able to have a better
//                 pitch in front of the investors."
//               </Typography>

//               <Box
//                 bgcolor={"#f1f1f1"}
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 gap={2}
//                 p={3}
//                 mt={2}
//               >
//                 <img src="Co1.png" width={"60px"} height={"60px"} />
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 700,
//                       fontSize: "20px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"30px"}
//                   >
//                     Pramudit Somvanshi
//                   </Typography>

//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 400,
//                       fontSize: "14px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"21px"}
//                   >
//                     Co-Founder at Ingenium Education
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             lg={4}
//             px={{
//               lg: 4,
//               md: 3,
//               sm: 2,
//               xs: 1,
//             }}
//           >
//             <Box border={"2px solid #f1f1f1"} padding={4}>
//               <Typography
//                 textAlign={"start"}
//                 sx={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 400,
//                   fontSize: "14px",
//                 }}
//                 color={"#000000"}
//                 mb={4}
//                 lineHeight={"21px"}
//               >
//                 "Easy to pitch helped us in creating the pitch deck crisp, clear
//                 and concise. Especially, the financial projections are made easy
//                 with their expertise, I highly recommend for every new founder
//                 to use their service not only for creating the pitch deck but
//                 also to get clarity on their idea first."
//               </Typography>

//               <Box
//                 bgcolor={"#f1f1f1"}
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 gap={2}
//                 p={3}
//                 mt={2}
//               >
//                 <img src="Co2.png" width={"60px"} height={"60px"} />
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 700,
//                       fontSize: "20px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"30px"}
//                   >
//                     Sulaiman Mmd
//                   </Typography>

//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 400,
//                       fontSize: "14px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"21px"}
//                   >
//                     Co-Founder & CEO at BiryBox
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             lg={4}
//             px={{
//               lg: 4,
//               md: 3,
//               sm: 2,
//               xs: 1,
//             }}
//           >
//             <Box border={"2px solid #f1f1f1"} padding={4}>
//               <Typography
//                 textAlign={"start"}
//                 sx={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 400,
//                   fontSize: "14px",
//                 }}
//                 color={"#000000"}
//                 mb={4}
//                 lineHeight={"21px"}
//               >
//                 "It was a great experience, the team was always on toes. They
//                 helped us : to align the story and the pitch together. Moreover
//                 they gave so many insightful suggestions when It was about the
//                 fundraise. Keep up the good work"
//               </Typography>

//               <Box
//                 bgcolor={"#f1f1f1"}
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 gap={2}
//                 p={3}
//                 mt={2}
//               >
//                 <img src="Co3.png" width={60} height={70} />
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 700,
//                       fontSize: "20px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"30px"}
//                   >
//                     Vaibhav Gupta
//                   </Typography>

//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontFamily: "Montserrat",
//                       fontWeight: 400,
//                       fontSize: "14px",
//                     }}
//                     color={"#000000"}
//                     lineHeight={"21px"}
//                   >
//                     Co-founder at Medicalwale.com
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Testimonial;



import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Testimonial = () => {
  return (
    <>

<Typography   sx={{ textAlign: "center", fontFamily: "Montserrat"  , fontWeight: 700 , lineHeight:"38.4px", fontSize: {
      lg:'32px',
      md: '30px',
      sm: '25px',
      xs: '25px'} }} color={"#000000"} my={{
      lg: 10,
      md: 8,
      sm: 6,
      xs: 5}}
      
       >
        Testimonial Section
      </Typography>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}  px={{
      lg: 20,
      md: 15,
      sm: 10,
      xs: 5}}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} px={{
      lg:4,
      md: 3,
      sm: 2,
      xs: 1}}  >
          <Box border={"2px solid #f1f1f1"} p={4}>
            <Typography textAlign={"start"} sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} mb={5} lineHeight={'21px'}>
              "Easy To Pitch and its cohort helped  us to be pitch ready
              and grooming.  The team and the founder helped  us a
              lot in making the right pitch  deck due to which we were
              able to  have a better pitch in front of  the
              investors."
            </Typography>
          

          <Box bgcolor={"#f1f1f1"} display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} p={3} mt={2}>
            <img src="Co1.png" width={"60px"} height={"60px"} />
            <Box>
              <Typography  sx={{  fontFamily: "Montserrat"  , fontWeight: 700 , fontSize: "20px" }} color={"#000000"} lineHeight={'30px'}>
                Pramudit 
                Somvanshi
              </Typography>

              <Typography  sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} lineHeight={'21px'}>
                Co-Founder at Ingenium Education
              </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>

        <Grid  item xs={12} lg={4} px={{
      lg:4,
      md: 3,
      sm: 2,
      xs: 1}} >
        <Box border={"2px solid #f1f1f1"} padding={4}>
            <Typography textAlign={"start"} sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} mb={4} lineHeight={'21px'}>
            "Easy to pitch helped us in creating the pitch deck crisp,
              clear and concise. Especially, the financial 
              projections are made easy with their expertise, I highly
              recommend for every new founder to use their service
              not only for creating the pitch deck but also to get
              clarity on their idea first."
            </Typography>
          

          <Box bgcolor={"#f1f1f1"} display={"flex"} justifyContent={'center'} alignItems={'center'} gap={2} p={3} mt={2}>
            <img src="Co2.png" width={"60px"} height={"60px"} />
            <Box>
              <Typography  sx={{  fontFamily: "Montserrat"  , fontWeight: 700 , fontSize: "20px" }} color={"#000000"} lineHeight={'30px'}>
              Sulaiman   Mmd
              </Typography>

              <Typography   sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} lineHeight={'21px'}>
              Co-Founder & CEO at BiryBox
              </Typography>
            </Box>
          </Box>
          </Box>
          
        </Grid>

        <Grid item xs={12} lg={4} px={{
      lg:4,
      md: 3,
      sm: 2,
      xs: 1}} >
        <Box border={"2px solid #f1f1f1"} padding={4}>
            <Typography textAlign={"start"} sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} mb={4} lineHeight={'21px'}>
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
              <Typography  sx={{  fontFamily: "Montserrat"  , fontWeight: 700 , fontSize: "20px" }} color={"#000000"} lineHeight={'30px'}>
              Vaibhav Gupta
              </Typography>

              <Typography sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"} lineHeight={'21px'}>
              Co-founder at  Medicalwale.com
              </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>

        
      </Grid>

      </Box>
      
    </>
  )
}

export default Testimonial