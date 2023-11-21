import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box sx={{ background: "#F5F7FA", p: 6 }}>
        <Typography
          textAlign={"center"}
          sx={{ fontWeight: 700, fontFamily: "Montserrat", fontSize: "32px" }}
          color={"#000000"}
          variant="h4"
        >
          Join 10,000+ subscribers
        </Typography>

        <Typography
          textAlign={"center"}
          sx={{ fontWeight: 700, fontFamily: "Montserrat", fontSize: "18px" }}
          color={"#000000"}
          variant="h6"
        >
          Join our mailing list to get the latest news
        </Typography>

        <div
          style={{
            display: "flex",
            marginTop: "4px",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <input
            style={{
              marginTop: "18px",
              width: "300px",
              fontSize: 17,
              padding: 8,
              border: "1px , solid , #000000",
            }}
            placeholder="Enter your email"
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
          <Button
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "12px",
              "&:hover": {
                background: "#ff8c22",
              },
              borderRadius: "0",
              bgcolor: "#ff8c22",
              mt: 2,
              mb: 0.5,
            }}
          >
            Subscribe
          </Button>
        </div>

        <Typography
          textAlign={"center"}
          sx={{ fontWeight: 400, fontFamily: "Montserrat", fontSize: "14px" }}
          color={"#000000"}
          variant="body1"
          my={2}
        >
          Join our mailing list to get the latest news
        </Typography>
      </Box>
    </>
  );
};

export default Subscribe;
