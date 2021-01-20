import { Fab, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const SideMenu = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={2}>
      <div>
        <Fab variant="extended">
          <AddIcon />
          Compose
        </Fab>
      </div>
    </Grid>
  );
};

export default SideMenu;
