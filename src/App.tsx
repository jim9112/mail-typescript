import React from 'react';
import TopNav from './components/TopNav';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SideMenu from './components/SideMenu';
import InBox from './components/InBox';

const useStyles = makeStyles((theme) => ({
  app: {
    margin: 0,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <TopNav />
      <Grid container>
        <SideMenu />
        <InBox />
      </Grid>
    </div>
  );
}

export default App;
