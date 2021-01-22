import { Typography, Checkbox } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  email: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(242,245,245,0.8)',
  },
}));

const InBoxEmail = () => {
  const classes = useStyles();
  return (
    <div className={classes.email}>
      <Checkbox />
      <Checkbox
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon />}
        name="checkedH"
      />
      <Checkbox
        icon={<LabelImportantIcon color="action" />}
        checkedIcon={<LabelImportantIcon color="secondary" />}
        name="checkedH"
      />
      <Typography variant="body2"> From </Typography>
      <Typography variant="body2"> Subject Line </Typography>
    </div>
  );
};

export default InBoxEmail;
