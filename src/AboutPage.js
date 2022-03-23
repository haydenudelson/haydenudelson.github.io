import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid, Paper, AppBar, Toolbar, Button } from '@mui/material';
import Headshot from './headshot.jpg';
import { styled } from '@mui/material/styles';
import Resume from './resume.pdf';
import Background from './Background';

function App() {
  return (
    <Background
      mainElement={
        <div>
          <p>
            I’m a full stack developer with proficiency in Java, Python, ReactJS,
            NodeJS, and SQL. I graduated in 2020 from Northwestern University
            with a B.Sc. in Computer Science. Currently, I’m a Java developer
            at RedMane Technology working on developing eligibility logic for
            Medicaid programs in South Dakota.
          </p>
          <p>
            I love trying new things- always have.
          </p>
          <p>
            Whether it's a new hobby (like backpacking or photography) or a new
            skill, I love pushing my boundaries and finding new ways to interact
            with and understand the world. That's what drew me to software
            engineering. With such a wide variety of technologies and
            applications, there's always something new to learn. From my first
            CS courses at Northwestern, I was excited by the chance to build
            functional and interesting projects while continuing to expand my
            skillset. Six years later, I've gained experience working across the
            stack, from a video game written in x86 Assembly to developing the
            application for Missouri's expanded Medicaid coverage, and I am
            excited to see how I can continue to learn from the challenges ahead.
            Please feel free to reach out to me via the links below!
          </p>
        </div>
      }
    />
  );
}

export default App;
