import React from "react";
import "./loginFlow.css";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
const LoginFlow = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-flow-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { md: "60%", sm: "60%", xs: "100%" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "50%", md: "70%", xs: "80%" },
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/sportsbattle-logo.png" className="logo-image" />
              <Typography
                sx={{
                  fontSize: { sm: "20px", xs: "18px" },
                  fontWeight: "700",
                  mb: "30px",
                }}
              >
                SportsBattle
              </Typography>
            </Box>
          </Box>
          <FormControl
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "25px", xs: "20px" },
                fontWeight: "700",
                mb: "20px",
              }}
            >
              Login to Your Account
            </Typography>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<GoogleIcon />}
                sx={{
                  color: "white",
                  width: "49%",
                  fontSize: { sm: "13px", xs: "9px" },
                  border: 2,
                  borderColor: "#272727",
                  borderRadius: "5px",
                  pt: "10px",
                  pb: "10px",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "white",
                  },
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Login with Google
              </Button>
              <Button
                startIcon={<AppleIcon />}
                sx={{
                  color: "white",
                  width: "49%",
                  fontSize: { sm: "13px", xs: "9px" },
                  pt: "10px",
                  pb: "10px",
                  border: 2,
                  borderColor: "#272727",
                  borderRadius: "5px",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "white",
                  },
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Login with Apple
              </Button>
            </Box>
            <Input
              id="my-input"
              placeholder="User Name"
              type="text"
              variant="outlined"
              disableUnderline
              sx={{
                width: 1,
                border: 0,
                outline: 0,
                borderColor: "#525252",
                background: "#272727",
                borderRadius: "5px",
                color: "white",
                boxShadow: 3,
                px: 2,
                py: { sm: 2, xs: 1 },
                mt: 1,
                fontSize: 14,
                mb: 0,
                focused: {
                  background: "white",
                },
                "&.MuiButtonBase-root:focus": {
                  bgcolor: "black",
                  borderColor: "white",
                },
                fontFamily: "Poppins",
              }}
            />
            <Box sx={{ position: "relative", width: 1 }} component="div">
              <Input
                id="my-input"
                placeholder="Password"
                type={showPass ? "text" : "password"}
                variant="outlined"
                disableUnderline
                sx={{
                  width: 1,
                  border: 0,
                  outline: 0,
                  borderColor: "#525252",
                  background: "#272727",
                  borderRadius: "5px",
                  color: "white",
                  boxShadow: 3,
                  px: 2,
                  py: { sm: 2, xs: 1 },
                  mt: 1,
                  fontSize: 14,
                  focused: "none",
                  mb: 2,
                  fontFamily: "Poppins",
                }}
              />
              {showPass ? (
                <VisibilityOutlinedIcon
                  sx={{
                    color: "white",
                    position: "absolute",
                    top: { sm: "25px", xs: "18px" },
                    right: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPass(false);
                  }}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  sx={{
                    color: "white",
                    position: "absolute",
                    top: { sm: "25px", xs: "18px" },
                    right: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPass(true);
                  }}
                />
              )}
            </Box>
            <Typography
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "flex-end",
                fontSize: { sm: "14px", xs: "12px" },
                mb: 2,
                fontFamily: "Poppins",
              }}
            >
              Forgot Password?
            </Typography>
            <Button
              sx={{
                width: 1,
                background: "#4831D4",
                color: { xs: "white" },
                fontSize: { sm: "14px", xs: "12px" },
                fontWeight: "600",
                pt: "10px",
                pb: "10px",
                mb: 3,
                "&.MuiButtonBase-root:hover": {
                  background: "#4831D4",
                },
                textTransform: "none",
              }}
            >
              Login to Your Account
            </Button>
            <Box
              component="div"
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: "14px", fontFamily: "Poppins" }}
              >
                Not a member yet?
              </Typography>
              <Link to="/signup">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "700",
                    ml: 1,
                    cursor: "pointer",
                    fontFamily: "Poppins",
                  }}
                >
                  Register Now
                </Typography>
              </Link>
            </Box>
          </FormControl>
        </Box>
      </Box>
      <div className="rightImageContainer">
        <img src="rightPhoneFrame.png" className="right-image" />
        <img src="rightPhoneScreen.png" className="right-screen" />
        <img src="Vector.png" className="right-vector" />
      </div>
    </div>
  );
};
export default LoginFlow;
