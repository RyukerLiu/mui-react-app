import './App.css';
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './Template/SignIn.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignIn />
    </React.Fragment>
  );
}

export default App;
