import { useState } from 'react';
import {
  Typography,
  Checkbox,
  Menu,
  Button,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
}));

const InBoxHeader = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    console.log('button clicked!!');
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <div className={classes.root}>
        <Checkbox />
        <Button
          aria-controls="select-all-options"
          aria-haspopup="true"
          onClick={handleClick}>
          <ArrowDropDownIcon />
        </Button>
        <Button aria-controls="refresh">
          <RefreshIcon />
        </Button>
        <div className={classes.pagination}>
          <Typography variant="body2">1-20 of 200</Typography>
          <Button aria-controls="refresh">
            <KeyboardArrowLeftIcon />
          </Button>
          <Button aria-controls="refresh">
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </div>
      <Menu
        id="select-all-options"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>None</MenuItem>
        <MenuItem onClick={handleClose}>Read</MenuItem>
        <MenuItem onClick={handleClose}>Starred</MenuItem>
        <MenuItem onClick={handleClose}>Unstarred</MenuItem>
      </Menu>
    </>
  );
};

export default InBoxHeader;
