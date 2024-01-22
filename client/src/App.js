import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import FrontPage from "./Pages/FrontPage";
import "bootstrap/dist/css/bootstrap.css";
import SignInPage from "./Pages/SignInPage";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path="/" element={<FrontPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/userhome" element={<Dashboard />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
