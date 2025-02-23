import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import Header from "../Header";

export default function AdvancedResourceTable() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sample Data
  const resources = [
    { name: "VM01", type: "Virtual Machine", status: "Running", date: "2024-02-22" },
    { name: "DB01", type: "Database", status: "Stopped", date: "2024-01-15" },
    { name: "WebServer", type: "Server", status: "Running", date: "2024-02-10" },
    { name: "App01", type: "Application", status: "Running", date: "2024-02-05" },
    { name: "DB02", type: "Database", status: "Stopped", date: "2024-02-18" },
    { name: "VM02", type: "Virtual Machine", status: "Running", date: "2024-01-25" },
    { name: "VM01", type: "Virtual Machine", status: "Running", date: "2024-02-22" },
    { name: "DB01", type: "Database", status: "Stopped", date: "2024-01-15" },
    { name: "WebServer", type: "Server", status: "Running", date: "2024-02-10" },
    { name: "App01", type: "Application", status: "Running", date: "2024-02-05" },
    { name: "DB02", type: "Database", status: "Stopped", date: "2024-02-18" },
    { name: "VM02", type: "Virtual Machine", status: "Running", date: "2024-01-25" },
  ];

  // Handle Sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Sort Function
  const sortedResources = resources
    .filter((resource) => resource.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });

  // Handle Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return ( 
    <>  
    <Header />
    <Box sx={{ display: "flex", justifyContent: "center", padding: 4}}>
    
      <Paper elevation={4} sx={{ padding: 4, width: "90%", borderRadius: 2}}>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Resource Tracking
          </Typography>

          <TextField
            label="Search Resource"
            variant="outlined"
            size="small"
            sx={{
              width: "300px"
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

       
        <TableContainer component={Paper} elevation={1}>
          <Table>

            <TableHead>
              <TableRow sx={{ backgroundColor: "green", color: "white" }}>
                {["name", "type", "status", "date"].map((column) => (
                  <TableCell key={column} sx={{ color: "white", fontWeight: "bold" }}>
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : "asc"}
                      onClick={() => handleRequestSort(column)}
                      sx={{ color: "white" }}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {sortedResources.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((resource, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                >
                  <TableCell>{resource.name}</TableCell>
                  <TableCell>{resource.type}</TableCell>
                  <TableCell>{resource.status}</TableCell>
                  <TableCell>{resource.date}</TableCell>
                </TableRow>
              ))}

              {/* No Results Found */}
              {sortedResources.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No resources found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          sx={{color : "white"}}
          count={sortedResources.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    </>
  );
}
