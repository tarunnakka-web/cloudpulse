import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import InfoCard from "../InfoCard"; // Import the card component
import Header from "../Header";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ToggleOnSharpIcon from '@mui/icons-material/ToggleOnSharp';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';


const cardItems = [
  { title: "Resource", description: "A resource in cloud computing refers to any computing component—such as virtual machines, storage, databases, and networking—that is provisioned and managed in the cloud.", icon: WorkIcon},
  { title: "Utilization", description: "In cloud computing, resource utilization refers to the efficient allocation and management of computing resources such as CPU, memory, storage, and networking to optimize performance and reduce costs. ", icon: TrendingUpIcon},
  { title: "Cost Analysis", description: "computing resources—such as CPU, memory, storage, and networking—are used optimally to minimize costs while maintaining performance.", icon: AttachMoneyIcon},
  { title: "Improvement", description: "Auto-Scaling & Load Balancing, Rightsizing & Optimization , Serverless Computing, Spot & Reserved Instances, Storage Optimization, Efficient Networking, Cost Monitoring & Alerts ", icon: UpgradeIcon},
  { title: "Green Switch", description: "It refers to energy-efficient mechanisms that optimize resource utilization, reduce power consumption, and minimize carbon footprints in cloud environments.", icon: ToggleOnSharpIcon},
  { title: "Settings", description: "Here itself your make chances based on your requirements.", icon: SettingsApplicationsSharpIcon},
];


export default function Dashboard() {
  return (
    <>
     <Header /> 
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>Dashboard</Typography>
      <Grid container spacing={3}>
        {cardItems.map((card) => ( 
              <Grid item xs={12} sm={6} md={4}>
              <InfoCard icon={card.icon} title={card.title} description={card.description} />
            </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
}
