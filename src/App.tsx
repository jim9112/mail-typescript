import React from 'react';
import TopNav from './components/TopNav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    margin: 0,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <TopNav />
      <p>Hello</p>
    </div>
  );
}

export default App;
