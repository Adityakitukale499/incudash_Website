import { Box, Typography  , Grid} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Services = () => {
  return (
    <Box sx={{my:5, color:'#212121'}}>
      <Typography textAlign={"center"} color={"#000000"} variant="h4" mb={2} sx={{  fontWeight: 700, fontFamily : 'Montserrat ,sans-serif' , fontSize : "32px" }} >
        Our Services
      </Typography>

      <Typography textAlign={"center"}  color={"#000000"} variant="body1" sx={{  fontWeight: 400, fontFamily : 'Montserrat ,sans-serif' , fontSize : "16px" , mb:4}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
      </Typography>

      {/* <Box sx={{ mx: 10 }}>
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
      </Box> */}
      <Box sx={{ mx: {lg:15,md:8,xs:4} }}>
      <Grid container spacing={0} sx={{ my: 3, display:'flex', justifyContent:'center' }}>
        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                md:'100%',
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent >
              <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="uservoice.png"
                style={{ width: "42px", height: "42px" }}
              /> */}
              <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img
                src="comments.png"
                style={{ width: "30px", height: "30px" }}
              /> 
              </Box>
              </Box>
               <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Review Pitch Deck
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
                Let us review your pitch deck and tell you  what it lags in.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
            <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="management.png"
                style={{ width: "48px", height: "42px" }}
              /> */}
               <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <img
                src="slideshow.png"
                style={{ width: "30px", height: "30px" }}
              /> 
               </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Investment Deck
                       
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
                
              We build your pitch deck or business plan from scratch to make it investment ready.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>            
            <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="brifcase.png"
                style={{ width: "42px", height: "42px" }}
              /> */}
             <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <img
                src="bar-chart.png"
                style={{ width: "30px", height: "30px" }}
              /> 
               </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Financial Valuations
              
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
               Never play with your numbers. Let us build  your financial projections or valuations to pitch to investors.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ my: 3, display:'flex', justifyContent:'center' }}>
        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                md:'100%',
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent >
              <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="uservoice.png"
                style={{ width: "42px", height: "42px" }}
              /> */}
              <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <img
                src="add-event.png"
                style={{ width: "30px", height: "30px" }}
              /> 
               </Box>
              </Box>
               <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Prepare for demo day
                
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
                Let us review your pitch deck and tell you what it 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
            <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="management.png"
                style={{ width: "48px", height: "42px" }}
              /> */}
              <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <img
                src="reader.png"
                style={{ width: "30px", height: "30px" }}
              /> 
               </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Founder Grooming
                                     
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
                Let us review your pitch deck and tell you what it lags in.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}>
          <Card
            sx={{
              width: {
                lg:"85%",
                xs:'100%'
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>            
            <Box display={'flex'} justifyContent={'center'}>
              {/* <img
                src="brifcase.png"
                style={{ width: "42px", height: "42px" }}
              /> */}
              <Box sx={{width:'64px',height:'64px',bgcolor:'#FF8C22',borderRadius:'5px',boxShadow:'-8px -8px 0px #f5d8a2', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <img
                src="arch-of-triumph.png"
                style={{ width: "30px", height: "30px" }}
              /> 
               </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Montserrat ,sans-serif",
                  fontSize: "20px",
                  my:1,
                  textAlign:'center'
                }}
                gutterBottom
                color={"#545454"}
              >
                Startup Meetups
              </Typography>

            <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: " Montserrat, sans-serif",
                  fontSize: "14px",
                  height: 85, overflowY: "scroll",
                  textAlign:'center'
                }}
              >
              Let us review your pitch deck and tell you  what it lags in.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Services;
