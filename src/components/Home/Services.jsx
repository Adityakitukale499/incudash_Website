import { Box, Typography  , Grid} from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box sx={{my:12, color:'#212121'}}>
      <Typography textAlign={"center"} color={"#000000"} variant="h4" mb={2} sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "32px" }} >
        Our Services
      </Typography>

      <Typography textAlign={"center"}  color={"#000000"} variant="body1" sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px" , mb:4}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
      </Typography>

      <Box sx={{ mx: 10 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={4}>
            <Box my={5} sx={{ width: '100%', textAlign: "center", color:'#545454'}}>
              <img
                src="Iphone.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "50%",
                }}
              />

              <Typography variant="h5"  my={1} sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}} >
                Review Pitch Deck
              </Typography>

              <Typography textAlign={"center"} sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
                Let us review your pitch deck and tell you <br/> what it lags in.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box  my={5} sx={{ width: '100%', textAlign: "center", color:'#545454' }}>
              <img
                src="vr.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "50%",
                }}
              />

              <Typography variant="h5" my={1} sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}} >
              Investment Deck
              </Typography>

              <Typography textAlign={"center"}  sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
              We build your pitch deck or business plan <br/> from scratch to make it investment ready.
                                      
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box my={5} sx={{ width: '100%', textAlign: "center", color:'#545454' }}>
              <img
                src="lapy.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "50%",
                }}
              />

              <Typography variant="h5" my={1} sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}}>
              Financial Valuations
              </Typography>

              <Typography  sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
              Never play with your numbers. Let us build <br/> your financial projections or valuations to <br/> pitch to investors.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} >
          <Grid item xs={12} lg={4}>
            <Box my={5} sx={{ width: '100%', textAlign: "center",
             color: "#545454"}}>
              <img
                src="Iphone.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "70%",
                }}
              />

              <Typography variant="h5"sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}} my={1}>
              Prepare for demo day
              </Typography>

              <Typography  sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
                Let us review your pitch deck and tell you<br/> what it lags in.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box my={5} sx={{ width: '100%', textAlign: "center", color: "#545454" }}>
              <img
                src="vr.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "50%",
                }}
              />

              <Typography my={1} variant="h5" sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}}>
              Founder Grooming
              </Typography>

              <Typography  sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
              Let us review your pitch deck and tell you <br/> what it lags in.
                                      
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box  my={5} sx={{ width: '100%', textAlign: "center" , color: "#545454" }}>
              <img
                src="lapy.png"
                style={{
                  width: "55%",
                //   margin: 37,
                  // height: 220,
                  borderRadius: "50%",
                }}
              />

              <Typography my={1} variant="h5" sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "24px"}}>
              Startup Meetups
              </Typography>

              <Typography  sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px"}}>
              Let us review your pitch deck and tell you <br/> what it lags in.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
