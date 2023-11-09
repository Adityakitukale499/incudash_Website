import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Partners = () => {
  return (
    <>

<Typography
        variant="h6"
        my={10}
        sx={{ textAlign: "center", fontFamily: "Montserrat"  , fontWeight: 700 , fontSize: "18px" }} color={"#000000"}
      >
        Our Partners
      </Typography>

      <Grid container mb={7}>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box bgcolor={"#F5F7FA"} p={4}>
            <Typography sx={{ fontFamily: "Montserrat"  , fontWeight: 700 , fontSize: "24px", lineHeight:'36px' }} color={"#000000"} mb={3} variant="h5" gap={4}>
              "Aliquet consectetur id magna <br />
              ac integer. Aliquet consectetur <br />
              id magna acinteger."
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <img src="aliquet.png" width="50px"  height={"50px"}  />

              <Box sx={{  fontFamily: "Montserrat"  , fontWeight: 400 , fontSize: "14px" }} color={"#000000"}>
                Full Name, Title <br />
                Company
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img src="company2.png" />
          </Box>
        </Grid>
      </Grid>
      
    </>
  )
}

export default Partners
