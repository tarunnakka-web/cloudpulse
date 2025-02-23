import React from "react";
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import Header from "../Header";


const improvementSuggestions = [
  "Optimize VM usage to reduce idle resources and save costs.",
  "Implement auto-scaling for better resource allocation.",
  "Monitor and reduce excessive network traffic.",
  "Switch to reserved instances for predictable workloads to lower expenses.",
  "Enhance security by enabling multi-factor authentication and regular audits.",
  "Regularly clean up unused storage and snapshots to optimize costs.",
  "Use cloud-native services to improve performance and reduce overhead."
];

export default function Improvement() {
  return (
    <> 
    <Header />

    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom mb={7} mt={3} sx={{ textAlign: "left" }}>
        Opportunities for Improvement
      </Typography>
      {/* <Typography variant="body1" gutterBottom sx={{ textAlign: "left", mb: 2 }}>
        Based on the analysis of cloud usage, the following improvements are suggested to optimize efficiency and reduce costs:
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <List>
              {improvementSuggestions.map((suggestion, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${suggestion}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
