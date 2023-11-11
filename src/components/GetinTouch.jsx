import { Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Captcha from "./Captcha";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [validateCaptcha, setValidateCaptcha] = useState(true);
  const success = () => toast.success("store data succsesfully!!");
  const enterValid = () => toast.warning("Enter Valid Captcha!!");
  const submit = async (e) => {
    e.preventDefault();
    if(!name && !email && !message){
      alert('please fill the all data')
      return;
    }
    // const newEntry = { email, password };
    // setAllEntry([...allEntry, newEntry]);
    const res = await fetch('https://incudash-c829c-default-rtdb.firebaseio.com/userMassageData.json',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name,
        email,
        message,
      })
    })
    if(res){
      setEmail('')
      setMessage('')
      setName('')
      success()
      alert('store data succsesfully')
    }else{
      alert('faield')
    }
  };
  
  return (
    <Box sx={{py:5}}>
      <Typography sx={{fontFamily:"Montserrat" , fontWeight:700, fontSize:"32px",lineHeight:"38.4px",textAlign:'center', color : "#000000" }} mb={2}>
        Get in touch
      </Typography>

      <Typography sx={{fontFamily:"Montserrat" , fontWeight:400, fontSize:"18px",lineHeight:"27px",textAlign:'center', color : "#000000" }} mb={1} >
        Let us know how we can help
      </Typography>
      

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form action="" method="POST" onSubmit={submit} style={{ width:'90%',maxWidth: "500px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
              textAlign: "left"
            }}
          >
            <label style={{
              fontFamily:"Montserrat",
              fontWeight:400,
              fontSize:"14px",
              lineHeight:"21px",
              color:"#000000"}}  htmlFor="name">Name</label>
            <input
              style={{
                marginTop: "8px",
                width: "100%",
                padding: 8,
                fontSize: 15,
              }}
              placeholder="Your full name"
              type="text"
              name="name"
              id="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <label style={{
              fontFamily:"Montserrat",
              fontWeight:400,
              fontSize:"14px",
              lineHeight:"21px",
              color:"#000000",
              marginTop:12}} htmlFor="email">Email</label>
            <input
              style={{
                marginTop: "8px",
                width: "100%",
                padding: 8,
                fontSize: 15,
              }}
              placeholder="me@company.com"
              type="text"
              name="email"
              id="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <label  style={{
              fontFamily:"Montserrat",
              fontWeight:400,
              fontSize:"14px",
              lineHeight:"21px",
              color:"#000000" ,
              marginTop:12}}  htmlFor="massage">Message</label>
            <textarea
              style={{
                marginTop: "8px",
                width: "100%",
                padding: 8,
                fontSize: 15,
                maxWidth: "100%",
              }}
              placeholder="Your message..."
              type="text"
              name="massage"
              id="massage"
              required
              autoComplete="off"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Captcha enterValid={enterValid} setValidateCaptcha={setValidateCaptcha}/>

          <Button
            disabled={validateCaptcha}
            variant="contained"
            type="submit"
            sx={{ '&:hover': {
              background:'#ff8c22'
         },fontFamily : 'Montserrat ,sans-serif ' , fontWeight: 500 , fontSize:"12px" , width: "107px", height : "33px", borderRadius : "0" ,
          bgcolor:"#ff8c22", color:"white" ,p:0, width: "100%", mt: 0 ,lineHeight:"16.8px" }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default GetInTouch;