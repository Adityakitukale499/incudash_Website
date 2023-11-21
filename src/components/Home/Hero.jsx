// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import { Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import GetInTouchModal from '../GetInTouchModal'

// const Hero = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('Hero.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         mt: 2,
//       }}
//     >
//       <Grid container spacing={2} sx={{ p: 8 }}>
//         <Grid item lg={6} xs={12} sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems:'center'
//               }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//               color: "#212121",
//               maxWidth:'565px'
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 fontWeight: 700,
//                 fontFamily: "Montserrat  ,sans-serif",
//                 fontSize: {
//                   lg: 56,
//                   md: 50,
//                   sm: 45,
//                   xs: 35,
//                 },
//               }}
//             >
//               We'll make you
//               and your startup
//               investment ready
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 mt: 2,
//                 fontFamily: "Montserrat ,sans-serif ",
//                 fontWeight: 400,
//                 fontSize: "18px",
//                 display:{lg:'block',xs:'none'}
//               }}
//             >
//               Easy To Pitch India’s first one stop solution to make startups investment ready.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 "&:hover": {
//                   background: "#ff8c22",
//                 },
//                 mt:2,
//                 fontFamily: "Montserrat ,sans-serif ",
//                 fontWeight: 500,
//                 fontSize: "12px",
//                 width: "132px",
//                 height: "41px",
//                 borderRadius: "0",
//                 bgcolor: "#ff8c22",
//                 color: "white",
//               }}
//               onClick={()=> setOpen(true)}
//             >
//               Get Started
//             </Button>
//             {/* Enquery box */}
//           </Box>
//         </Grid>
//         <Grid item lg={6} xs={12}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src="https://leaderonomics-storage.s3.ap-southeast-1.amazonaws.com/mika_baumeister_ylgxwqex2c_unsplash_80bdf2_50ced91a6c.jpeg"
//               style={{ width: "100%", maxWidth:'500px' }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//       <GetInTouchModal open={open} setOpen={setOpen}/>
//     </Box>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GetInTouchModal from "../GetInTouchModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundImage: "url('Hero Heading.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        mt: 2,
      }}
    >
      <Grid container spacing={2} sx={{ py: 8, px: 4 }}>
        <Grid
          item
          lg={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              // color: "#212121",
              // maxWidth:'565px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat  ,sans-serif",
                fontSize: {
                  lg: 56,
                  md: 50,
                  sm: 45,
                  xs: 35,
                },
                textAlign: "center",
                color: "#FF8C22",
                lineHeight: 1.2,
              }}
            >
              We'll make you and your startup investment ready
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontFamily: "Montserrat ,sans-serif ",
                fontWeight: 400,
                fontSize: "18px",
                textAlign: "center",
                display: { lg: "block", xs: "none" },
                color: "#FFF7F0",
              }}
            >
              Easy To Pitch India’s first one stop solution to make startups
              investment ready.
            </Typography>
            <Box display={"flex"} justifyContent={"center"} mt={6}>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                  },
                  mt: 2,
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  width: "132px",
                  height: "41px",
                  borderRadius: "0",
                  bgcolor: "#ff8c22",
                  color: "white",
                }}
                onClick={() => setOpen(true)}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item lg={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://leaderonomics-storage.s3.ap-southeast-1.amazonaws.com/mika_baumeister_ylgxwqex2c_unsplash_80bdf2_50ced91a6c.jpeg"
              style={{ width: "100%", maxWidth:'500px' }}
            />
          </Box>
        </Grid> */}
      </Grid>
      <GetInTouchModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Hero;
