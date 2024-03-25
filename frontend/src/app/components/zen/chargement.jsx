import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

export default function Chargement(props) {

    const {message, type} = {...props}
  return (
    <>
     <Grid container spacing={0} alignContent='center' justify='center'>
            <Grid item ></Grid>
            <CircularProgress color={type==='error'? 'secondary': 'primary'} /> <span>{message}.</span>
            
            </Grid>
    </>
  );
}
