import { Typography ,Box ,Button } from '@mui/material'
import React , {useState} from 'react'

const Subscribe = () => {

    const [email, setEmail] = useState("");
  return (
    <>
    <Box sx={{background: "#F5F7FA",p:6}} >

    <Typography textAlign={'center'}  variant='h4' fontWeight={600}   >
        Join 10,000+ subscribers
    </Typography>

    <Typography textAlign={'center'} variant='h6' >
        Join our mailing list to get the latest news 
    </Typography>

    <div style={{display: "flex"  ,marginTop : "4px" , justifyContent : 'center' , gap : 15 }} >
         
          <input
          style={{marginTop : "18px" , width : "300px",fontSize:17, padding:8 }}
          placeholder='Enter your email'
            type="text"
            name="email"
            id="email"
            // pattern=".+@globex\.com"
            // size="30"
            // required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant='contained' sx={{'&:hover': {
                background:'#ff8c22'
           }
              ,bgcolor:'orange', mt : 2,mb:0.5 }}>
              Subscribe
            </Button>
        </div>

        <Typography textAlign={'center'} variant='body1' my={2} >
        Join our mailing list to get the latest news 
    </Typography>


        

    </Box>
  
      
    </>
  )
}

export default Subscribe
