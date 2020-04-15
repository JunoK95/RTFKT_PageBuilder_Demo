import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { autoIdGenerator } from '../helpers';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 160,
    height: 160,
    textAlign: 'center',
  },
});

function LinkCard(props) {
  const {title, id} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={id ? `/page/${id}` : `/page/${autoIdGenerator()}`}>
        <CardActionArea className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              {title ? title : '(no title)'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default LinkCard
