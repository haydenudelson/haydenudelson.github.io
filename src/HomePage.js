import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid, Paper, AppBar, Toolbar, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Headshot from './headshot.jpg';
import { styled } from '@mui/material/styles';
import Resume from './resume.pdf';
import Background from './Background';

function App() {
  return (
    <Background
      mainElement={<div>
        I’m a full stack developer with proficiency in Java, Python, ReactJS,
        NodeJS, and SQL. I graduated in 2020 from Northwestern University
        with a B.Sc. in Computer Science. Currently, I’m a Java developer
        at RedMane Technology working on developing eligibility logic for
        Medicaid programs in South Dakota. <p onClick={() => window.open("/about","_self")}>[more]</p>
              </div>}
      />
  );
}

export default App;
