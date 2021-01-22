import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InBoxHeader from './InBoxHeader';
import InBoxEmail from './InBoxEmail';
import { emails } from '../samplaeData';

const InBox = () => {
  console.log(emails);

  return (
    <Grid item xs={8}>
      <InBoxHeader />
      <InBoxEmail />
    </Grid>
  );
};

export default InBox;
