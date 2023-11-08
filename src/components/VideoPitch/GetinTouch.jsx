import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const GetinTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email, password };
    setAllEntry([...allEntry, newEntry]);
  };
  return (
    <>
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight={600} textAlign={"center"} mt={4}>
          Get in touch
        </Typography>

        <Typography variant="h6" textAlign={"center"}>
          Let us know how we can help
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form action="" onSubmit={submit} style={{ width: "500px" }}>
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
                // pattern=".+@globex\.com"
                // size="30"
                // required
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
                // pattern=".+@globex\.com"
                // size="30"
                // required
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
              <label htmlFor="name">Message</label>
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
                name="name"
                id="name"
                // pattern=".+@globex\.com"
                // size="30"
                // required
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  background: "#ff8c22",
                },
                bgcolor: "orange",
                width: "101%",
                mt: 2,
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default GetinTouch;
