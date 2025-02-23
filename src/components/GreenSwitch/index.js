import React from "react";
import { Box, Typography, Grid, Paper, Switch, List, ListItem, ListItemText } from "@mui/material";
import Header from "../Header";

const instances = [
  { name: "VM-001", inactiveDays: 45 },
  { name: "VM-002", inactiveDays: 30 },
  { name: "VM-003", inactiveDays: 20 },
  { name: "VM-004", inactiveDays: 45 },
  { name: "VM-005", inactiveDays: 30 },
  { name: "VM-006", inactiveDays: 20 },
];

export default function GreenSwitch() {
  return (
    <>
    <Header />
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom mt={3} sx={{ textAlign: "left" }}>
        Green Switch for Resource Management
      </Typography>
      <Typography variant="body1" gutterBottom  sx={{ textAlign: "left", mb: 6 }}>
        The following instances have been inactive for extended periods and will be automatically switched off to optimize resource usage:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 2 }}>
            <List>
              {instances.map((instance, index) => (
                <ListItem key={index} secondaryAction={<Switch defaultChecked color="success" />}>
                  <ListItemText primary={`${instance.name} - Inactive for ${instance.inactiveDays} days`} />
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
