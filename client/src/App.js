import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Wedding from './wedding.jpeg'
import AppBar from './components/AppBar'
import SignUp from './components/SignUp'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/RSVP" component={() => <SignUp />} />
        <Route path="/" component={() => <Home /> } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
