import { Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const success = () => toast.success("store data succsesfully!!");
  const faild = () => toast.warning("store data succsesfully!!");
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
      <Typography variant="h4" fontWeight={600} textAlign={"center"} mt={4}>
        Get in touch
      </Typography>

      <Typography variant="h6" textAlign={"center"}>
        Let us know how we can help
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form action="" method="POST" onSubmit={submit} style={{ width:'500px',minWidth: "200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
              textAlign: "left",
            }}
          >
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="massage">Message</label>
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
          <Button
            variant="contained"
            type="submit"
            sx={{ '&:hover': {
              background:'#ff8c22'
         },fontFamily : 'Montserrat ,sans-serif ' , fontWeight: 500 , fontSize:"13px" , width: "107px", height : "33px", borderRadius : "0" ,
          bgcolor:"#ff8c22", color:"white" ,p:0, width: "100%", mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default GetInTouch;