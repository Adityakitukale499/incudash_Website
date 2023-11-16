import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Body = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
        color: "#212121",
      }}
    >
      <Grid container sx={{ width: "75%" }}>
        <Grid
          item
          xs={12}
          lg={4.8}
          sx={{
            display: "flex",
            justifyContent: {lg:"start",xs:'center'},
            alignItems: "center",
          }}
        >
          <img
            src="Top_Lapy.png"
            style={{ width: "85%", maxWidth: "370px",  }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "32px",
              }}
            >
              {/* Let us be a part of your startup journey! */}
              Embark on your startup journey with us!
            </Typography>
            <Typography
              sx={{
                // my: 1,
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              {/* We make founders pitch ready. Build your startup story and not just a pitch deck. Get your Financial Valuations and Projections perfect Customized aw-dropping presentations with best design and crisp content to raise capital. */}
              <b>• Compelling Storytelling: </b>Transform your pitch into a captivating narrative that resonates with investors.
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              {/* Depending on the sector, stage and market of your startup, Easy to Pitch builds your investment pitch deck presentation that is designed to tell your startup story in the best way possible to investors in order to face less rejections. */}
              <b>• Market Research Expertise:</b> Benefit from our insights to fine-tune your pitch based on sector-specific market trends.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              <b>• Precision in Finances:</b> Ensure your financial valuations and projections are flawless, instilling confidence in potential backers.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Montserrat ,sans-serif",
                fontSize: "14px",
              }}
            >
              <b>• Customized Presentations:</b> Our team crafts attention-grabbing presentations with the perfect blend of design and content.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
        color: "#212121",
      }}
    >
      <Grid container sx={{ width: "75%" }} gap={2}>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: "flex",
            flexDirection:'column',
            gap:'20px'
          }}
        >
          <Typography sx={{fontFamily:'Montserrat', fontWeight:700, fontSize:'24px',lineHeight:'36px'}}>
            Gallery Section
          </Typography>
          <Typography sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
          <Typography sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
          Lorem ipsum dolor sit amet
          </Typography>
          <Typography sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
          dolor sit amet consectetur
          </Typography>
          <Typography sx={{fontFamily:'Montserrat', fontWeight:400, fontSize:'14px',lineHeight:'21px'}}>
          dolor sit amet consectetur
          </Typography>
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
                // onClick={() => setOpen(true)}
              >
                Book a demo
              </Button>
        </Grid>

        <Grid
          item
          xs={12}
          lg={8.7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="Small Columns.png"
            style={{ width: "100%"  }}
          />
        </Grid>
      </Grid>
      
    </Box>
    </>
  );
};

export default Body;
