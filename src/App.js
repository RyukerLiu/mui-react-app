import './App.css';
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './SignIn';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function MyApp() {
  return <Button variant="contained">Hello World</Button>;
}

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignIn />
    </React.Fragment>
  );
}

export default App;
