import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu, Card, CardActionArea, CardContent, Typography, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const useStyles = makeStyles({
  root: {
    width: 260,
    height: 200,
    textAlign: 'center',
    padding: 0,
  },
  content: {
    padding: 12,
  },
});

function SaveMenu(props) {
  const {id} = props;
  const context = useContext(DataContext);
  const classes = useStyles();
  const [title, settitle] = useState(context.title);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (name, value) => {
    settitle(value);
  }

  return (
    <React.Fragment>
      <IconButton aria-label="save" onClick={handleClick}>
        <SaveIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Card className={classes.root}>
          <div style={{padding: 32}}>
            <TextField
              id="filled-required"
              label={'Title'}
              defaultValue={context.title}
              variant="outlined"
              value={title}
              onChange={event => handleChange('title', event.target.value)}
            />
          </div>
          <CardActionArea 
            className={classes.content} 
            onClick={() => {
              context.functions.saveData(id, title)
              handleClose();
            }}
          >
            <CardContent>
              <Typography gutterBottom>
                {'SAVE'}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Menu>
    </React.Fragment>
  )
}

export default SaveMenu
