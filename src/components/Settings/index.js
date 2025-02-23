import Header from "../Header"
import {Typography, Box } from "@mui/material";


const Settings = () => {
    return (
        <>
         <Header /> 
         <Box sx={{ display: "flex", justifyContent: "flex-start", padding: 4}}>
           <Typography variant="h4" fontWeight="bold">
                       Settings
            </Typography>
           
         </Box>
        
        
        </>
    )
}






export default Settings;