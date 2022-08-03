import { Box, Button, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FirstSignUpFlow from "./component/first-signupFlow/FirstSignUpFlow";
import LoginFlow from "./component/loginFlow/LoginFlow";
import SecondSignUpFlow from "./component/second-signupFlow/SecondSignUpFlow";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFlow />} />
          <Route path="/signup" element={<FirstSignUpFlow />} />
          <Route path="/fullName" element={<SecondSignUpFlow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
