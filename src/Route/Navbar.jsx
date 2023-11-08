import React from "react";
import "./Navbar.css"
import { Box, Grid, Typography,Button } from "@mui/material";
// import {  } from "@mui/joy";

function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (
    <header className="main-header">
      <a href="index.html" className="brand-logo">
        {/* <div className="brand-logo-name">
          <h1>Easy to Pitch</h1>
        </div> */}
        <Typography variant="h6" fontWeight={800} height={50} bgcolor={"white"}>
            Easy
            <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
              to pitch
            </Typography>
          </Typography>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
           <a href="/">Home</a>
           </li>
           <li>
            
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/ourservices">Our Services</a>
          </li>
          <li>
            <a href="/getfunded">Get Funded</a>
          </li>
          
          <li>
            <a href="/videopitch">Video Pitch</a>
          </li>
          <li>
            <a href="/investors">Investors</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contactus"> <Button
            variant="contained"
            sx={{ 
              '&:hover': {
                background:'#ff8c22'
           }
              ,bgcolor: "orange", mt: -1}}
          >
            Contact Us
          </Button></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

