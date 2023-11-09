import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Cards() {
  return (
    <Box sx={{ mx: 10 }}>
      <Grid container spacing={0} sx={{ m: 5 }}>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              maxWidth: "80%",
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <img
                src="startup1.png"
                style={{ width: "42px", height: "42px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
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
                  height: 85, overflowY: "scroll"
                }}
              >
                Investors Invest in compelling stories and your pitch deck is a
                vehicle for telling the story you want to tell.Investors Invest in compelling stories and your pitch deck is a
                vehicle for telling the story you want to tell.Investors Invest in compelling stories and your pitch deck is a
                vehicle for telling the story you want to tell.Investors Invest in compelling stories and your pitch deck is a
                vehicle for telling the story you want to tell.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              maxWidth: "80%",
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <img
                src="startup2.png"
                style={{ width: "42px", height: "42px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
                  my: 1,
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
                }}
              >
                Financial Projections & Valuations complete an Investment Pitch
                or Business Plan. Without right numbers there is high chance of
                rejection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              maxWidth: "80%",
              my: 1,
              py: 3,
              color: "grey",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <img
                src="startup3.png"
                style={{ width: "42px", height: "42px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Raleway ,sans-serif",
                  fontSize: "20px",
                  my: 1,
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
                }}
              >
                Good Investors are those that add value to your startup than
                just put capital and wait for returns. Hence, we bridge the gap!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
