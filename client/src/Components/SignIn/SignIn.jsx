import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, Button, Typography } from "@mui/material";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const formData = {
    email,password
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
      try {
        axios.post("http://localhost:5000/user/signin",formData).then((res)=>{
          console.log(res);
          navigate("/userhome");
        })
      } catch (error) {
        
      }
  }

  return (
    <div>
      <form>
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            margin: "0 auto",
            marginTop: "190px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              marginTop: "30px",
            }}
          ></Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <TextField
            id="email"
            label="Email"
            style={{ marginTop: "20px", width: "300px" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            style={{ marginTop: "15px", marginBottom: "20px", width: "300px" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ paddingLeft: "", marginBottom: "30px" }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
