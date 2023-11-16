// // import React from "react";
// import "./Navbar.css";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import { NavLink } from "react-router-dom";
// // import {  } from "@mui/joy";

// function Click() {
//   var navbar = document.querySelector(".main-nav ul");
//   navbar.classList.toggle("active");
// }

// function Navbar() {
//   return (
//     <header className="main-header">
//       <span href="index.html" className="brand-logo">
//         {/* <div className="brand-logo-name">
//           <h1>Easy to Pitch</h1>
//         </div> */}
//         <Typography variant="h6" fontWeight={800} height={50} bgcolor={"white"}>
//           Easy
//           <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
//             to pitch
//           </Typography>
//         </Typography>
//       </span>
//       <div href="#" className="toggle-button" onClick={Click}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//       <nav className="main-nav">
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Home</span>
//             </NavLink>
//             {/* <span >Home</span> */}
//           </li>
//           <li>
//             <NavLink
//               to="/aboutus"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>About Us</span>
//             </NavLink>
//             {/* <span href="/aboutus">About Us</span> */}
//           </li>
//           <li>
//             <NavLink
//               to="/ourservices"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Our Services</span>
//             </NavLink>
//             {/* <span href="/">O</span> */}
//           </li>
//           <li>
//             <NavLink
//               to="/getfunded"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Get Funded</span>
//             </NavLink>
//             {/* <span href="/"></span> */}
//           </li>

//           <li>
//             <NavLink
//               to="/videopitch"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Video Pitch</span>
//             </NavLink>
//             {/* <span href="/videopitch"></span> */}
//           </li>
//           <li>
//             <NavLink
//               to="/investors"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Investors</span>
//             </NavLink>
//             {/* <span href="/"></span> */}
//           </li>
//           <li>
//           <NavLink
//               to="/blogs"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Blogs</span>
//             </NavLink>
//             {/* <span href="/"></span> */}
//           </li>
//           <li>
//           <NavLink
//               to="/pricing"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <span>Pricing</span>
//             </NavLink>
//             {/* <span href="/"></span> */}
//           </li>
//           <li>
//           <NavLink
//               to="/contactus"
//               style={({ isActive }) => ({
//                 color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
//               })}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   "&:hover": {
//                     background: "#ff8c22",
//                   },
//                   bgcolor: "orange",
//                   mt: -1,
//                 }}
//               >
//                 Contact Us
//               </Button>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;





import React from "react";
import "./Navbar.css";
import { Box, Grid, Typography, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="main-header">
      <span href="index.html" className="brand-logo">
        <div className="brand-logo-name">
        </div>
        {/* <Typography variant="h6" fontWeight={800} height={'40px'} width={'63px'} mt={1} bgcolor={"white"}>
          Easy
          <Typography variant="body2" fontWeight={600} bgcolor={"white"}>
            to pitch
          </Typography>
  </Typography>*/}
        <img src="easytopitchLogo.png" alt="logo" style={{marginTop:10}} onClick={()=> navigate('/')}/> 

      </span>
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
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Home</span>
            </NavLink>
            {/* <span >Home</span> */}
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>About Us</span>
            </NavLink>
            {/* <span href="/aboutus">About Us</span> */}
          </li>
          <li>
            <NavLink
              to="/ourservices"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Our Services</span>
            </NavLink>
            {/* <span href="/">O</span> */}
          </li>
          <li>
            <NavLink
              to="/getfunded"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Get Funded</span>
            </NavLink>
            {/* <span href="/"></span> */}
          </li>

          <li>
            <NavLink
              to="/videopitch"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Video Pitch</span>
            </NavLink>
            {/* <span href="/videopitch"></span> */}
          </li>
          <li>
            <NavLink
              to="/investors"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Investors</span>
            </NavLink>
            {/* <span href="/"></span> */}
          </li>
          <li>
          <NavLink
              to="/blogs"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Blogs</span>
            </NavLink>
            {/* <span href="/"></span> */}
          </li>
          <li>
          <NavLink
              to="/pricing"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <span>Pricing</span>
            </NavLink>
            {/* <span href="/"></span> */}
          </li>
          <li>
          <NavLink
              to="/contactus"
              onClick={Click}
              style={({ isActive }) => ({
                color: isActive ? "orange" : "#545454",textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'
              })}
            >
              <Button variant="contained" sx={{'&:hover': {
                background:'#ff8c22'
           },fontFamily : 'Montserrat ,sans-serif ' , fontWeight: 500 , fontSize:"12px" , width: "107px", height : "33px", borderRadius : "0" ,
            bgcolor:"#ff8c22", color:"white" ,p:0}}>Contact Us</Button>
            
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;