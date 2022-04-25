import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ListUserDirectory from "./ListUserDirectory";
import SendForm from "./SendForm";
import Button from "@mui/material/Button";
import SendMessageForm from "./SendMessageForm";
import { useSelector,useDispatch } from "react-redux";
import {setSendInfo} from "../reduxProcess/actions/SendInfoAction"

export default function DisplayDetails() {
  const [toUser, setToUser] = React.useState("");
  const [toUserAddress, setToUserAddress] = React.useState("");
  const { LoadSCpropReducer, UserpropsReducer, AppHandlerReducer } =
    useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(SendInfoReducer);
  return (
    <React.Fragment>
      <List disablePadding>
        <ListItem key={"Contract address:"} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Contract address:"} secondary={""} />
          {/* <Typography variant="body2">{"Could not load"}</Typography> */}
          <Typography variant="body2">
            {LoadSCpropReducer.contractAddress || "Could not load"}
          </Typography>
        </ListItem>

        <ListItem key={"Contract owner:"} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Contract owner:"} secondary={""} />
          <Typography variant="body2">
            {LoadSCpropReducer.contractOwner || "Could not load"}
          </Typography>
        </ListItem>

        <ListItem key={"Your Ethereum address:"} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Your Ethereum address:"} secondary={""} />
          <Typography variant="body2">
            {UserpropsReducer.ethereumAddress || "Could not load"}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Your balance:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {UserpropsReducer.balance || "0"} Ether
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <ListUserDirectory toUser={toUser} setToUser={setToUser} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              disableElevation
              onClick={() => {
                navigator.clipboard.writeText(toUser);
                dispatch(setSendInfo({toUserAddress:toUser}));
              }}
            >
              Copy
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SendForm
          />
        </Grid>
        <SendMessageForm />
        <Grid item xs={12} sm={12}>
          <ListItem key={"Status:"} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={"Status:"} secondary={""} />
            <Typography variant="body2">
              {AppHandlerReducer.statusMessage || "MetaMask Not detected"}
            </Typography>
          </ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
