import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';

function FileUpload() {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    // Handle the dropped file here
    const droppedFiles = e.dataTransfer.files;
    // You can perform further actions with the dropped files
    console.log("Dropped files:", droppedFiles);
  };
  return (
    <div>
      <Box
        sx={{
          width: 1487,
          padding: 3,
          borderRadius: 8,
          height: "380px",
        }}
      >
        <Paper
          sx={{
            padding: 2,
            height: "100%",
            backgroundColor: "lightblue",
            border: "3px dotted  black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Button
            variant="outlined"

            component="label"
            sx={{ marginTop: "120px",color: "black",border: "3px solid black" }}
          >
            <UploadIcon/>
            Upload File
            <input type="file" style={{ display: "none" }} />
          </Button>
        </Paper>
      </Box>
    </div>
  );
}

export default FileUpload;
