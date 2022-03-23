import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid, Paper, AppBar, Toolbar, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Headshot from './headshot.jpg';
import { styled } from '@mui/material/styles';
import Resume from './resume.pdf';

const NavButton = styled(Button)({
  color: '#181311',
  'text-transform': 'none',
  'font-family': 'DM Sans',
  'font-size': '24px',
  'padding-left': '0px',
  'padding-right': '0px',
  'margin-top': '12px',
  'margin-bottom': '12px',
});

const Background = ({
  mainElement
}) => (
  <Box
    className="background">
    <Grid container spacing={0} xs={12}>
      <Grid item container className="homeImage" xs={12}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} className="welcomeTextBox">
          <p className="welcomeText">Hi, I'm Hayden!</p>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}>
          <img className="headshot" src={Headshot} alt="headshot"></img>
        </Grid>
        <Grid item xs={4}>
            <Toolbar disableGutters="true" className="toolbar">
              <NavButton onClick={() => window.open("/", "_self")} >home</NavButton>
              <NavButton onClick={() => window.open("/about", "_self")}>about</NavButton>
              <NavButton onClick={() => window.open("/work", "_self")}>work</NavButton>
              <NavButton onClick={() => window.open(Resume, "_self")} >resume</NavButton>
            </Toolbar>
            {React.cloneElement(mainElement)}

            <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} onClick={() => window.open("mailto: haydenudelson18@gmail.com")} />
            <FontAwesomeIcon className="icon" icon={faGithubSquare} onClick={() => window.open("https://github.com/haydenudelson","_self")} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/haydenudelson/","_self")} />
            <FontAwesomeIcon className="icon" icon={faInstagramSquare} onClick={() => window.open("https://www.instagram.com/haydens.photo.feed/","_self")} />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default Background;
