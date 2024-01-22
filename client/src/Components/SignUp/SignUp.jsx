import react, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, Button, Typography } from "@mui/material";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [mobno, setMobno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    name,
    mobno,
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/user/signup", formData).then((res) => {
        console.log(res);
      });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <form>
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            margin: "0 auto",
            marginTop: "90px",
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
              paddingTop: "",
            }}
          >
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            id="name"
            label="Name"
            style={{ marginTop: "20px", width: "300px" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="mobno"
            label="Mob No"
            style={{ marginTop: "15px", width: "300px" }}
            value={mobno}
            onChange={(e) => {
              setMobno(e.target.value);
            }}
          />
          <TextField
            id="email"
            label="Email"
            style={{ marginTop: "15px", width: "300px" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Password"
            style={{ marginTop: "15px", marginBottom: "20px", width: "300px" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ paddingLeft: "30px", marginBottom: "30px" }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
