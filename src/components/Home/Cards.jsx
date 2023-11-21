import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Cards() {
  return (
    <Box sx={{ m: { lg: 15, md: 8, xs: 4 } }}>
      <Grid
        container
        spacing={0}
        sx={{ m: 0, display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
          <Card
            sx={{
              width: {
                lg: "85%",
                md: "100%",
                xs: "100%",
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"}>
                <img
                  src="user (2).png"
                  style={{ width: "42px", height: "42px" }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
                  my: 1,
                  textAlign: "center",
                }}
                gutterBottom
                color={"#545454"}
              >
                Startup Story
              </Typography>

              <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: "Open Sans ,sans-serif",
                  fontSize: "14px",
                  height: 85,
                  overflowY: "scroll",
                  textAlign: "center",
                }}
              >
                Investors Invest in compelling stories and your pitch deck is a
                vehicle for telling the story you want to tell.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
          <Card
            sx={{
              width: {
                lg: "85%",
                xs: "100%",
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"}>
                <img
                  src="management (1).png"
                  style={{ width: "48px", height: "42px" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
                  my: 1,
                  textAlign: "center",
                }}
                color={"#545454"}
                gutterBottom
              >
                Financial Projections
              </Typography>

              <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: "Open Sans ,sans-serif",
                  fontSize: "14px",
                  height: 85,
                  overflowY: "scroll",
                  textAlign: "center",
                }}
              >
                Financial Projections & Valuations complete an Investment Pitch
                or Business Plan. Without right numbers there is high chance of
                rejection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"}>
          <Card
            sx={{
              width: {
                lg: "85%",
                xs: "100%",
              },
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"}>
                <img
                  src="brifcase (1).png"
                  style={{ width: "42px", height: "42px" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
                  my: 1,
                  textAlign: "center",
                }}
                color={"#545454"}
                gutterBottom
              >
                Fundraising
              </Typography>

              <Typography
                variant="body2"
                color={"#545454"}
                sx={{
                  fontWeight: 400,
                  fontFamily: "Open Sans ,sans-serif",
                  fontSize: "14px",
                  height: 85,
                  overflowY: "scroll",
                  textAlign: "center",
                }}
              >
                Good Investors are those that add value to your startup than
                just put capital and wait for returns. Hence, we bridgr startup
                than just put capital and wait for returns. Hence, we bridgr
                startup than just put capital and wait for returns. Hence, we
                bridgr startup than just put capital and wait for returns.
                Hence, we bridgr startup than just put capital and wait for
                returns. Hence, we bridgr startup than just put capital and wait
                for returns. Hence, we bridge the gap!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
