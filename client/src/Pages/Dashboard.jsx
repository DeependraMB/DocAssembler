import React from 'react'
import HomeBoxes from '../Components/HomeComponents/HomeBoxes'
import { Typography } from '@mui/material'
import Navbar from '../Components/Navbar/Navbar'
import FileUpload from '../Components/HomeComponents/FileUpload'

function Dashboard() {
  return (
    <div>
    <Navbar/>
    <Typography variant="h4" mb={0} mt={2} ml={5} sx={{fontWeight: "bolder", fontFamily: "nunito"}}>
      Welcome to Your Dashboard
    </Typography>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <HomeBoxes
        title="Document Management"
        description="Manage and organize your documents."
        link="/document-management"
      />
      <HomeBoxes
        title="PDF Tools"
        description="Explore tools for working with PDFs."
        link="/pdf-tools"
      />
      <HomeBoxes
        title="Account Settings"
        description="Update your profile and preferences."
        link="/account-settings"
      />
      
    </div>
    <FileUpload/>
  </div>
  )
}

export default Dashboard