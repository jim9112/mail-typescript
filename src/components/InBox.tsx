import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InBoxHeader from './InBoxHeader';
import InBoxEmail from './InBoxEmail';

const InBox = () => {
  return (
    <Grid item xs={8}>
      <InBoxHeader />
      <InBoxEmail />
    </Grid>
  );
};

export default InBox;
