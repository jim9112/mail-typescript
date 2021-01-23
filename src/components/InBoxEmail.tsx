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
    paddingRight: '10px',
    position: 'relative',
  },
  flexed: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
  },
  time: {
    position: 'absolute',
    right: 10,
  },
}));

interface AppProps {
  from: string;
  subject: string;
}

const InBoxEmail = ({ from, subject }: AppProps) => {
  const classes = useStyles();
  return (
    <div className={classes.email}>
      <div className={classes.flexed}>
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
        <Typography variant="body2"> {from} </Typography>
      </div>
      <Typography variant="body2"> {subject} </Typography>
      <Typography className={classes.time} variant="body2">
        {' '}
        10:08 AM{' '}
      </Typography>
    </div>
  );
};

export default InBoxEmail;
