import { Typography, Button, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Captcha from "./Captcha";
import EmailValidator from "email-validator";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [resetCaptcha, setResetCaptcha] = useState(true);
  const [validateCaptcha, setValidateCaptcha] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const success = () =>
    toast.success(
      "We have registered your message and we will connect you soon."
    );
  const enterValid = () => toast.error("Enter Valid Captcha!!");
  const errorTost = () => toast.warning("Faield!!");
  const fillErrorTost = () => toast.warning("Fill the complete form!!");
  useEffect(() => {
    if (EmailValidator.validate(email) && !validateCaptcha && name && message) {
      setBtnDisabled(false);
      console.log("valied");
    } else {
      console.log("Invalied");
      setBtnDisabled(true);
    }
  }, [validateCaptcha, email, name]);
  const submit = async (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      fillErrorTost();
      return;
    }
    const res = await fetch(
      "https://incudash-c829c-default-rtdb.firebaseio.com/userMassageData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    if (res) {
      setResetCaptcha(!resetCaptcha);
      setEmail("");
      setMessage("");
      setName("");
      success();
      // alert("store data succsesfully");
    } else {
      // alert("faield");
      errorTost();
    }
  };

  return (
    <Grid container px={{ lg: 20, md: 10, xs: 2 }}>
      <Grid item lg={6} xs={12}>
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "38.4px",
                // textAlign: "center",
                color: "#000000",
                width: "85%",
                maxWidth: "600px",
              }}
              mb={2}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "27px",
                // textAlign: "center",
                color: "#000000",
                width: "85%",
                maxWidth: "600px",
              }}
              mb={1}
            >
              Let us know how we can help
            </Typography>

            <form
              action=""
              method="POST"
              onSubmit={submit}
              style={{
                width: "85%",
                maxWidth: "600px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "8px",
                  textAlign: "left",
                }}
              >
                <label
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#000000",
                  }}
                  htmlFor="name"
                >
                  Name
                </label>
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
                <label
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#000000",
                    marginTop: 12,
                  }}
                  htmlFor="email"
                >
                  Email
                </label>
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
                <label
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#000000",
                    marginTop: 12,
                  }}
                  htmlFor="massage"
                >
                  Message
                </label>
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
              <Captcha
                enterValid={enterValid}
                setValidateCaptcha={setValidateCaptcha}
                resetCaptcha={resetCaptcha}
              />

              <Button
                disabled={btnDisabled}
                variant="contained"
                type="submit"
                sx={{
                  "&:hover": {
                    background: "#ff8c22",
                  },
                  fontFamily: "Montserrat ,sans-serif ",
                  fontWeight: 500,
                  fontSize: "12px",
                  height: "33px",
                  borderRadius: "0",
                  bgcolor: "#ff8c22",
                  color: "white",
                  p: 0,
                  width: "100%",
                  mt: 0,
                  lineHeight: "16.8px",
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        display={{ lg: "flex", xs: "none" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Box py={5}> */}
        <Box
          sx={{
            minWidth: "450px",
            height: "450px",
            backgroundImage: "url('successful-confident.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            my: 5,
            borderRadius: 5,
          }}
        ></Box>
        {/* <img src="" alt="" style={{ width: "80%", maxWidth:'600px', height:'600px' }} /> */}
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default GetInTouch;

// import { Typography, Button, Box } from "@mui/material";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// // import Captcha from "./Captcha";

// const GetInTouch = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const [validateCaptcha, setValidateCaptcha] = useState(true);
//   const success = () =>
//     toast.success(
//       "We have registered your message and we will connect you soon."
//     );
//   const enterValid = () => toast.warning("Enter Valid Captcha!!");
//   const submit = async (e) => {
//     e.preventDefault();
//     if (!name && !email && !message) {
//       alert("please fill the all data");
//       return;
//     }
//     // const newEntry = { email, password };
//     // setAllEntry([...allEntry, newEntry]);
//     const res = await fetch(
//       "https://incudash-c829c-default-rtdb.firebaseio.com/userMassageData.json",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//           phoneNumber,
//         }),
//       }
//     );
//     if (res) {
//       setEmail("");
//       setMessage("");
//       setName("");
//       setPhoneNumber('')
//       success();
//       // alert("store data succsesfully");
//     } else {
//       alert("faield");
//     }
//   };

//   return (
//     <Box sx={{ py: 5 }}>
//       <Typography
//         sx={{
//           fontFamily: "Montserrat",
//           fontWeight: 700,
//           fontSize: "32px",
//           lineHeight: "38.4px",
//           textAlign: "center",
//           color: "#000000",
//         }}
//         mb={1}
//       >
//         Get in touch
//       </Typography>

//       <Typography
//         sx={{
//           fontFamily: "Montserrat",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "27px",
//           textAlign: "center",
//           color: "#000000",
//         }}
//         mb={1}
//       >
//         Let us know how we can help
//       </Typography>

//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <form action="" method="POST" onSubmit={submit}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               marginTop: "8px",
//               textAlign: "left",
//               width: "100%",
//               minWidth: "400px",
//             }}
//           >
//             <input
//               style={{
//                 marginTop: "8px",
//                 width: "100%",
//                 padding: 10,
//                 fontSize: 15,
//                 boxShadow: "0px 0px 3px #888888",
//                 borderRadius: "5px",
//                 outline: "none",
//                 border: "0.2px solid #000",
//               }}
//               placeholder="Full Name"
//               type="text"
//               name="name"
//               id="name"
//               required
//               autoComplete="off"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               marginTop: "4px",
//             }}
//           >
//             <input
//               style={{
//                 marginTop: "8px",
//                 width: "100%",
//                 padding: 10,
//                 fontSize: 15,
//                 boxShadow: "0px 0px 3px #888888",
//                 borderRadius: "5px",
//                 outline: "none",
//                 border: "0.2px solid #000",
//               }}
//               placeholder="Email Address"
//               type="text"
//               name="email"
//               id="email"
//               required
//               autoComplete="off"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: "100%",
//               minWidth: "400px",
//             }}
//           >
//             <input
//               style={{
//                 marginTop: "8px",
//                 width: "100%",
//                 padding: 10,
//                 fontSize: 15,
//                 boxShadow: "0px 0px 3px #888888",
//                 borderRadius: "5px",
//                 outline: "none",
//                 border: "0.2px solid #000",
//               }}
//               placeholder="Phone Number"
//               type="text"
//               name="name"
//               id="name"
//               required
//               autoComplete="off"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               marginTop: "4px",
//             }}
//           >
//             <textarea
//               style={{
//                 margin: "8px 0",
//                 width: "100%",
//                 padding: 10,
//                 fontSize: 15,
//                 boxShadow: "0px 0px 3px #888888",
//                 borderRadius: "5px",
//                 outline: "none",
//                 border: "0.2px solid #000",
//               }}
//               placeholder="Your message"
//               type="text"
//               name="massage"
//               id="massage"
//               required
//               autoComplete="off"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           {/* <Captcha
//             enterValid={enterValid}
//             setValidateCaptcha={setValidateCaptcha}
//           /> */}

//           <Button
//             // disabled={validateCaptcha}
//             variant="contained"
//             type="submit"
//             sx={{
//               "&:hover": {
//                 background: "#ff8c22",
//               },
//               fontFamily: "Montserrat ,sans-serif ",
//               fontWeight: 500,
//               fontSize: "12px",
//               height: "33px",
//               bgcolor: "#ff8c22",
//               color: "white",
//               // p: 2,
//               width: "100%",
//               mt: 2,
//               lineHeight: "16.8px",
//             }}
//           >
//             Send Message
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default GetInTouch;
