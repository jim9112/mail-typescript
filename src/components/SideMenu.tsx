import classes from '*.module.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const SideMenu = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={3}>
      <p>Side Menu</p>
    </Grid>
  );
};

export default SideMenu;
