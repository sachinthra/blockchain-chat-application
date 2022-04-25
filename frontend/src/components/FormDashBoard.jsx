import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DisplayDetails from "./DisplayDetails";
import ReceiveMessages from "./receiveMessages";

const theme = createTheme();

export default function FormDashBoard({ checkWalletIsConnected }) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Chat Application
          </Typography>
          <Button onClick={() => checkWalletIsConnected()} variant="text">
            Refresh
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Chat Application
              </Typography>
              <Typography variant="subtitle1">Basic Details</Typography>
            </React.Fragment>
            <React.Fragment>
              <DisplayDetails />
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
      <Container>
        <ReceiveMessages />
      </Container>
    </ThemeProvider>
  );
}
