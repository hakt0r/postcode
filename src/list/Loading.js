
import React          from 'react';
import Skeleton       from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';

const fake = [0,0,0,0,0,0,0,0,0,0,0];

const useStyles = makeStyles( theme => ({
  moreSpace: {
    marginTop:    '1rem',
    marginBottom: '1rem'
  }
}));

export default function Loading() {
  const classes = useStyles();
  return <>{ fake.map( (_,index)=>
    <Skeleton key={index} className={classes.moreSpace}/>
  ) }</>;
}
