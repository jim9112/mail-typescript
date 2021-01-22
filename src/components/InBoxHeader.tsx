import { Typography, Checkbox, Menu, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const InBoxHeader = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('button clicked!!');
  };

  return (
    <div className={classes.root}>
      <Checkbox />
      <Button
        aria-controls="select-all-options"
        aria-haspopup="true"
        onClick={handleClick}>
        <ArrowDropDownIcon />
      </Button>
      <p>Inbox Header</p>
    </div>
  );
};

export default InBoxHeader;
