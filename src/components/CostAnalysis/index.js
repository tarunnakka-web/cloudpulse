import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import Header from "../Header";



const costBreakdownData = [
  { category: "Compute", cost: 500 },
  { category: "Storage", cost: 300 },
  { category: "Network", cost: 200 },
  { category: "Support", cost: 150 },
];

const costTrendsData = [
  { month: "Jan", cost: 1200 },
  { month: "Feb", cost: 1100 },
  { month: "Mar", cost: 1300 },
  { month: "Apr", cost: 1400 },
  { month: "May", cost: 1350 },
];

const totalCost = costBreakdownData.reduce((sum, item) => sum + item.cost, 0);

export default function CostAnalysisPage() {
  return (
    <>
    <Header />
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom mb={7} mt ={3} sx={{ textAlign: "left" }}>
        Cost Analysis
      </Typography>

      <Grid container spacing={3}>
        {/* Cost Breakdown */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "flex-start" }}>
            <Typography variant="h6" gutterBottom fontWeight={"bold"} sx={{color: "#1976d2" , mb:2}}>
              Cost Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={costBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cost" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Cost Trends */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "flex-start"}}>
            <Typography variant="h6" gutterBottom fontWeight={"bold"} sx={{color: "#43a047", mb:2 }}>
              Cost Trends
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={costTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cost" stroke="#ff9800" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center", m: 7 }}>
        Total Cost: ${totalCost}
      </Typography>
    </Box>
    </>
  );
}
