import React from "react";
import "./firstSignUpFlow.css";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";

const FirstSignUpFlow = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  const handleContinue = () => {
    navigate("/fullName", { replace: true });
  };
  return (
    <div className="first-signup-flow-container">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { sm: "60%", xs: "100%" },
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { md: "50%", xs: "80%" },
            mr: { xs: "20px", sm: 0 },
          }}
        >
          <img src="/sportsbattle-logo.png" className="first-logo-image" />
          <Typography
            sx={{
              fontSize: { sm: "20px", xs: "18px" },
              fontWeight: "700",
              mb: "30px",
            }}
          >
            SportsBattle
          </Typography>
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
              sx={{ fontSize: "13px", mb: "15px", fontFamily: "Poppins" }}
            >
              STEP 1 OF 5
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: "25px", xs: "20px" },
                fontWeight: "700",
                mb: "5px",
              }}
            >
              Enter Your Email
            </Typography>
            <Typography
              sx={{ fontSize: "13px", mb: "15px", fontFamily: "Poppins" }}
            >
              You'll use this log into you account.
            </Typography>
            <Input
              id="my-input"
              placeholder="Enter your email*"
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
                focused: "none",
                mb: 0,
                fontFamily: "Poppins",
              }}
            />
            <Input
              id="my-input"
              placeholder="Promo Code (Optional)"
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
                focused: "none",
                mb: 2,
                fontFamily: "Poppins",
              }}
            />
            <Box
              component="div"
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  width: "40%",
                  background: "#525252",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "600",
                  pt: { sm: "13px", xs: "7px" },
                  pb: { sm: "13px", xs: "7px" },
                  mb: 3,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#525252",
                  },
                  textTransform: "none",
                }}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                sx={{
                  width: "57%",
                  background: "#4831D4",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "600",
                  pt: { sm: "13px", xs: "7px" },
                  pb: { sm: "13px", xs: "7px" },
                  mb: 3,
                  "&.MuiButtonBase-root:hover": {
                    background: "#4831D4",
                  },
                  textTransform: "none",
                }}
                onClick={handleContinue}
              >
                Continue
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            right: { md: "50px", xs: "20px" },
            height: "60%",
            borderRightColor: "white",
            borderRight: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            top: "35%",
          }}
        >
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              borderColor: "#4831D4",
              background: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#4831D4",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
          <Box
            sx={{
              width: { md: "30px", xs: "20px" },
              height: { md: "30px", xs: "20px" },
              position: "relative",
              right: "-50%",
              border: 2,
              borderRadius: "50%",
              background: "black",
            }}
          ></Box>
        </Box>
      </Box>
      <div className="rightImageContainer">
        {/*        <img src="rightImagePure.jpg" className="first-right-image" />
         */}{" "}
      </div>
    </div>
  );
};
export default FirstSignUpFlow;
