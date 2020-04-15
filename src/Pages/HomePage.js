import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkCard from '../components/LinkCard';
import Axios from 'axios';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

function HomePage() {
  const classes = useStyles();
  const [pages, setpages] = useState([]);
  const [fetch, setfetch] = useState(false);
  useEffect(() => {
    setfetch(true);
    Axios({
      method: 'GET',
      url: 'https://us-central1-rtfkt-pagebuilder.cloudfunctions.net/getPages',
    }).then(data => {
      setpages(data.data);
      setfetch(false);
    }).catch(setfetch(false));
  }, [])

  const cards = pages.map((p,i) => {
    return(
      <LinkCard key={i} id={p.id} title={p.title} />
    )
  })
  return (
    <div>
      <AppBar className={classes.root} position={'static'}>
        <Typography variant="h6" className={classes.title}>
          RTFKT TEST PAGE BUILDER
        </Typography>
      </AppBar>
      <h2>Welcome to RTFKT Test Page Builder Demo</h2>
      <div style={{display: 'inline'}}>
        <LinkCard title={'Create New Page'} />
        {fetch ? <div>loading...</div> : cards}
      </div>
    </div>
  )
}

export default HomePage
