import { Box, Typography  , Grid} from "@mui/material";
import React from "react";

const OurService = () => {
  return (
    <Box sx={{my:12, color:'#212121'}}>
      <Typography variant="h4" my={2}  sx={{ textAlign: "center", fontWeight: 700 }}>
        Our Services
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center",mb:4 }}>
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

              <Typography variant="h5" fontWeight={600} my={1}>
                Review Pitch Deck
              </Typography>

              <Typography textAlign={"center"}>
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

              <Typography variant="h5" my={1} fontWeight={600}>
              Investment Deck
              </Typography>

              <Typography textAlign={"center"}>
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

              <Typography variant="h5" my={1} fontWeight={600}>
              Financial Valuations
              </Typography>

              <Typography>
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

              <Typography variant="h5" fontWeight={600} my={1}>
              Prepare for demo day
              </Typography>

              <Typography>
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

              <Typography my={1} variant="h5" fontWeight={600}>
              Founder Grooming
              </Typography>

              <Typography>
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

              <Typography my={1} variant="h5" fontWeight={600}>
              Startup Meetups
              </Typography>

              <Typography>
              Let us review your pitch deck and tell you <br/> what it lags in.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurService;
