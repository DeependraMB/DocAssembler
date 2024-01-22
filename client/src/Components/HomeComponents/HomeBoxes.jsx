import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const HomeBoxes = ({ title, description, link }) => {
  return (
    <Box
      sx={{
        width: 500,
        padding: 3,
        
        borderRadius: 8,
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Link to={link} style={{ textDecoration: "none" }}>
          <Typography variant="body2" color="primary" mt={2}>
            Go to {title}
          </Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default HomeBoxes;