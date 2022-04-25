import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setSendInfo } from "../reduxProcess/actions/SendInfoAction";
import { ethers } from "ethers";

export default function SendMessageForm() {
  const { SendInfoReducer, LoadSCpropReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSendInfo({ sendMessage: event.target.value }));
  };
  // "0x4300000000000000000000000000000000000000000000000000000000000000"
  const handleClick = async (event) => {
    // console.log(await LoadSCpropReducer.contract.sendMessage())
    // console.log("sending" + ethers.utils.formatBytes32String(SendInfoReducer.sendMessage));
    // console.log("sending" + ethers.utils.parseBytes32String("0x6869696969696969000000000000000000000000000000000000000000000000"));
    console.log("sending");
    const result = await LoadSCpropReducer.contract
      .sendMessage(
        SendInfoReducer.toUserAddress,
        ethers.utils.formatBytes32String(SendInfoReducer.sendMessage)
      )
      .then(() => console.log("sent message"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Grid item xs={12} sm={10}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Message to Send"
            variant="outlined"
            value={SendInfoReducer.sendMessage}
            onChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          <Button variant="contained" disableElevation onClick={handleClick}>
            Send
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
