import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
// import GetInTouch from "./GetInTouch";
import { Typography, Button, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Captcha from "./Captcha";
import EmailValidator from "email-validator";

export default function GetInTouchModal({ open, setOpen }) {
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
  const fillErrorTost = () => toast.error("Fill the complete form!!");
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
      // alert("please fill the all data");
      fillErrorTost();
      return;
    }
    // const newEntry = { email, password };
    // setAllEntry([...allEntry, newEntry]);
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
    <>
      <Modal
        aria-labelledby="modal-roadmapTitle"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            // maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {/* <GetInTouch/> */}
          <Box sx={{ py: 5 }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#000000",
              }}
              mb={2}
            >
              Get in touch <br />
                <img src="Vector.png" alt="" />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "27px",
                textAlign: "center",
                color: "#000000",
              }}
              mb={1}
            >
              Let us know how we can help
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: { lg: "450px", xs: "300px" },
              }}
            >
              <form
                action=""
                method="POST"
                onSubmit={submit}
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "8px",
                    textAlign: "left",
                    width: "100%",
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
        </Sheet>
      </Modal>
    </>
  );
}
