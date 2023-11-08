import React from "react";
import "./Navbar.css";
import { Box, Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Home</a>
            </NavLink>
            {/* <a >Home</a> */}
          </li>
          <li>
            <NavLink
              to="/aboutus"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>About Us</a>
            </NavLink>
            {/* <a href="/aboutus">About Us</a> */}
          </li>
          <li>
            <NavLink
              to="/ourservices"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Our Services</a>
            </NavLink>
            {/* <a href="/">O</a> */}
          </li>
          <li>
            <NavLink
              to="/getfunded"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Get Funded</a>
            </NavLink>
            {/* <a href="/"></a> */}
          </li>

          <li>
            <NavLink
              to="/videopitch"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Video Pitch</a>
            </NavLink>
            {/* <a href="/videopitch"></a> */}
          </li>
          <li>
            <NavLink
              to="/investors"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Investors</a>
            </NavLink>
            {/* <a href="/"></a> */}
          </li>
          <li>
          <NavLink
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Blogs</a>
            </NavLink>
            {/* <a href="/"></a> */}
          </li>
          <li>
          <NavLink
              to="/pricing"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <a>Pricing</a>
            </NavLink>
            {/* <a href="/"></a> */}
          </li>
          <li>
          <NavLink
              to="/contactus"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",
              })}
            >
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                  },
                  bgcolor: "orange",
                  mt: -1,
                }}
              >
                Contact Us
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
