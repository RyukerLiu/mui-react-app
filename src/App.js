import './App.css';
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import SignInSide from './Template/SignInSide.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignInSide />
    </React.Fragment>
  );
}

export default App;
