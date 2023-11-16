// import { Box, Grid, Typography } from "@mui/material";
// import { orange } from "@mui/material/colors";
// import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { NavLink, useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('Hero.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         p: {
//           lg: 8,
//           md: 6,
//           sm: 4,
//           xs: 0,
//         },
//       }}
//     >
//       <Grid container sx={{ textAlign: "start" }}>
//         <Grid
//           item
//           xs={12}
//           lg={4}
//           display={"flex"}
//           justifyContent={"center"}
//           textAlign={"center"}
//         >
//           <img
//             src="easytopitchLogo.png"
//             alt="companyLogo"
//             height={50}
//             style={{ margin: "25px 0" }}
//           />
//         </Grid>

//         <Grid item xs={12} lg={7.5}>
//           <Grid
//             container
//             p={2}
//             mx={{
//               lg: 8,
//               md: 5,
//               sm: 0,
//               xs: 0,
//             }}
//           >
//             <Grid
//               item
//               lg={4}
//               xs={5.5}
//               mb={2}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Box sx={{ textAlign: "start", pl: 8 }}>
//                 <Typography
//                   variant="body1"
//                   color={"#FF8C22"}
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "21px",
//                     mb: 1,
//                   }}
//                 >
//                   Contact Us
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   }}
//                 >
//                   Toll-Free: 18003099044 <br />
//                   Email: info@easytopitch.com <br />
//                   <FacebookIcon />
//                   <InstagramIcon />
//                   <LinkedInIcon />
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid
//               item
//               lg={2.6}
//               xs={5.5}
//               mb={2}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Box sx={{ textAlign: "start", pl: 5 }}>
//                 <Typography
//                   color={"#FF8C22"}
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "21px",
//                     mb: 1,
//                   }}
//                 >
//                   ABOUT
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   }}
//                 >
//                   One stop solution <br />
//                   for pitching.We <br />
//                   make founders <br />
//                   pitch ready and <br />
//                   help you in <br />
//                   raising funds!
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid
//               item
//               lg={2.6}
//               xs={5.5}
//               mb={2}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Box sx={{ textAlign: "start" }}>
//                 <Typography
//                   color={"#FF8C22"}
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "21px",
//                     mb: 1,
//                   }}
//                 >
//                   Our Services
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   }}
//                 >
//                   Pitch Deck <br />
//                   Business <br />
//                   Plan <br />
//                   Financial <br />
//                   Projections <br />
//                   Demo Day <br />
//                   Founder <br />
//                   Grooming
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid
//               item
//               lg={2.6}
//               xs={5.5}
//               mb={2}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Box sx={{ textAlign: "start" }}>
//                 <Typography
//                   color={"#FF8C22"}
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "21px",
//                     mb: 1,
//                   }}
//                 >
//                   Useful Links
//                 </Typography>

//                 <NavLink
//                   to="/"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Home
//                 </NavLink> <br />
//                 <NavLink
//                   to="/aboutus"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   About Us
//                 </NavLink> <br />
//                 <NavLink
//                   to="/ourservices"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Our Services
//                 </NavLink> <br />
//                 <NavLink
//                   to="/getfunded"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Get Funded
//                 </NavLink> <br />
//                 <NavLink
//                   to="/videopitch"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Video Pitch
//                 </NavLink> <br />
//                 <NavLink
//                   to="/investors"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Investors
//                 </NavLink> <br />
//                 <NavLink
//                   to="/blogs"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Blogs
//                 </NavLink> <br />
//                 <NavLink
//                   to="/pricing"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Pricing
//                 </NavLink>
//                 <br />
//                 <NavLink
//                   to="/contactus"
//                   style={({ isActive }) => ({
//                     color: isActive ? "orange" : "#000000",
//                     textDecoration: "none",
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "14px",
//                     lineHeight: "28px",
//                   })}
//                 >
//                   Contact Us
//                 </NavLink>
//               </Box>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <p
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           textAlign: "center",
//           marginTop: 20,
//         }}
//       >
//         Copyright &copy; 2023&nbsp;
//         <b style={{ padding: "0 5px" }}>Easy to Pitch</b>
//       </p>
//     </Box>
//   );
// };

// export default Footer;


import { Box, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // backgroundImage: "url('Hero.png')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        bgcolor:'#000000',
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
          <img
            src="easytopitchLogo.png"
            alt="companyLogo"
            height={50}
            style={{ margin: "25px 0" }}
            onClick={()=> navigate('/')}
          />
        </Grid>

        <Grid item xs={12} lg={7.5}>
          <Grid
            container
            p={2}
            mx={{
              lg: 8,
              md: 5,
              sm: 0,
              xs: 0,
            }}
          >
            <Grid
              item
              lg={4}
              xs={5.5}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ textAlign: "start", pl: 8 }}>
                <Typography
                  variant="body1"
                  color={"#FFFFFF"}
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    mb: 1,
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color:'#fff'
                  }}
                >
                  Toll-Free: 18003099044 <br />
                  Email: info@easytopitch.com <br />
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={2.6}
              xs={5.5}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ textAlign: "start", pl: 5 }}>
                <Typography
                  color={"#FFFFFF"}
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    mb: 1,
                  }}
                >
                  ABOUT
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color:'#fff'
                  }}
                >
                  One stop solution <br />
                  for pitching.We <br />
                  make founders <br />
                  pitch ready and <br />
                  help you in <br />
                  raising funds!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={2.6}
              xs={5.5}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Typography
                  color={"#FFFFFF"}
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    mb: 1,
                  }}
                >
                  Our Services
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                    color:'#fff'
                  }}
                >
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
            <Grid
              item
              lg={2.6}
              xs={5.5}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ textAlign: "start" }}>
                <Typography
                  color={"#FFFFFF"}
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    mb: 1,
                  }}
                >
                  Useful Links
                </Typography>

                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Home
                </NavLink> <br />
                <NavLink
                  to="/aboutus"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  About Us
                </NavLink> <br />
                <NavLink
                  to="/ourservices"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Our Services
                </NavLink> <br />
                <NavLink
                  to="/getfunded"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Get Funded
                </NavLink> <br />
                <NavLink
                  to="/videopitch"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Video Pitch
                </NavLink> <br />
                <NavLink
                  to="/investors"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Investors
                </NavLink> <br />
                <NavLink
                  to="/blogs"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Blogs
                </NavLink> <br />
                <NavLink
                  to="/pricing"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Pricing
                </NavLink>
                <br />
                <NavLink
                  to="/contactus"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "28px",
                  })}
                >
                  Contact Us
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: 20,
          color:'#ffffff'
        }}
      >
        Copyright &copy; 2023&nbsp;
        <b style={{ padding: "0 5px" }}>Easy to Pitch</b>
      </p>
    </Box>
  );
};

export default Footer;
