import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Portfolio = () => {
  return (
    <>

<Typography variant="h6" sx={{ textAlign: "center", fontWeight: 600 }}>
        Our Portfolio
      </Typography>
     

      <Box display={"flex"} my={5} justifyContent={"center"}>
        <img src="comapany.png " width={"75%"} />
      </Box>
      
    </>
  )
}

export default Portfolio