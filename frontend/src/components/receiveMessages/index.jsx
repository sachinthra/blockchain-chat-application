import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { setReceivedMessages } from "../../reduxProcess/actions/ReceiveMessageAction";
import RenderTable from "./renderTable";

export default function ReceiveMessages() {
  const { LoadSCpropReducer, ReceivedMessagesReducer } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  console.log(ReceivedMessagesReducer)

  const handleClick = async (event) => {
    console.log("Receiving");
    const result = await LoadSCpropReducer.contract
      .receiveMessages()
      .then(async (data) => {
        console.log(data);
        // content, timestamp, sender
        const result = await LoadSCpropReducer.contract.getMyInboxSize().then((size) => {
          console.log(size)
          dispatch(
            setReceivedMessages({
              numSentMessages: parseInt(size[0]._hex, 16),
              numReceivedMessages: parseInt(size[1]._hex, 16),
              content: data[0],
              timestamp: data[1],
              sender: data[2],
            })
          );
        })
      })
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
          <RenderTable />
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          <Button variant="contained" disableElevation onClick={handleClick}>
            Refresh Received Messages
          </Button>
        </Typography>
      </Grid>
      {/* <Grid item xs={12} sm={2}>
        <RenderTable />
      </Grid> */}
    </>
  );
}
