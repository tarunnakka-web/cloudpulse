import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { LineChart,PieChart, Pie, Cell, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Legend, AreaChart, Area } from "recharts";
import Header from "../Header";

const cpuData = [
  { time: "10 AM", usage: 30 },
  { time: "11 AM", usage: 50 },
  { time: "12 PM", usage: 45 },
  { time: "1 PM", usage: 60 },
  { time: "2 PM", usage: 40 },
  { time: "3 PM", usage: 75 },
];

const memoryData = [
  { time: "10 AM", usage: 40 },
  { time: "11 AM", usage: 55 },
  { time: "12 PM", usage: 50 },
  { time: "1 PM", usage: 70 },
  { time: "2 PM", usage: 45 },
  { time: "3 PM", usage: 80 },
];

const diskData = [
    { name: "Used", value: 70, color: "#ff6f61" },
    { name: "Free", value: 30, color: "#4caf50" },
  ];
  
  const networkData = [
    { time: "10:00", upload: 20, download: 50 },
    { time: "10:30", upload: 40, download: 70 },
    { time: "11:00", upload: 35, download: 60 },
    { time: "11:30", upload: 50, download: 80 },
    { time: "12:00", upload: 45, download: 75 },
  ];


export default function Utilization() {
  return (
    <>
     <Header />
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4 }}>
      {/* Page Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom mb={7} mt ={3} sx={{ alignSelf: "flex-start" }}>
        Utilization Monitoring
      </Typography>

      <Grid container spacing={3} sx={{ width: "90%", justifyContent: "center"}}>
        {/* CPU Usage Chart */}
        <Grid item xs={12} md={6} sx ={{mb : 10}}>
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2, color: "#1976d2" }}>
              CPU Usage
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cpuData}>
                <defs>
                  <linearGradient id="cpuColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#1976d2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#1976d2" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="usage" stroke="#1976d2" fill="url(#cpuColor)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Memory Usage Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2, color: "#43a047" }}>
              Memory Usage
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={memoryData}>
                <XAxis dataKey="time" stroke="#43a047" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="usage" fill="#43a047" barSize={40} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid> 

      <Grid container spacing={3} sx={{ width: "90%", justifyContent: "center"}}>
        {/* Disk Usage */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2, color: "#1976d2" }}>
              Disk Usage
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={diskData} dataKey="value" outerRadius={80} label>
                  {diskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Network Traffic */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2, color: "#43a047" }}>
              Network Traffic
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="upload" stroke="#ff9800" strokeWidth={2} />
                <Line type="monotone" dataKey="download" stroke="#2196f3" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

    </Box>
    </>
  );
}
