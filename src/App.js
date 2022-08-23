import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#0052cc",
    },
  },
});

const MyComponent = styled("Button")({
  background: "linear-gradient(45deg, #FE6B8B, #999)",
  border: 0,
  borderRadius: 15,
  marginBottom: 15,
  color: "white",
  padding: "5px 30px",
});

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theme
                </Typography>
                <Button color="secondary">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h3" component="div">
              Welcome To MUI
            </Typography>
            <Typography variant="body1">
              Learned How To Use Material UI
            </Typography>
            <MyComponent>Test Styled Button</MyComponent>
            <TextField
              variant="outlined"
              color="secondary"
              type="time"
              label="The Time "
            />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '%100' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '%100' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '%100' }} />
              </Grid>
            </Grid>

            <CheckBoxExample></CheckBoxExample>
            <ButtonGroup variant="contained" color="primary" size="large">
              <Button endIcon={<SaveIcon />}>Save</Button>
              <Button endIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
