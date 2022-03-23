import React from 'react';
import { AppBar,
         Toolbar,
         Button
        } from '@material-ui/core';

function NavBar() {
  return(
    <AppBar position="static">
      <Toolbar>
        <Button>about</Button>
        <Button>work</Button>
        <Button>resume</Button>
        <Button>photography</Button>
      </Toolbar>
      <Grid
        container
        direction="row"
        justify="center"
        alignitems="center"
        >
        <Paper>
          Hi, I'm Hayden
        </Paper>
      </Grid>
    </AppBar>
  );
}

export default NavBar;
