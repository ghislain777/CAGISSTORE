
import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

 
  
export default function ApiAler(props) {
  const classes = useStyles();
    const {message, severity, open, handleAlertClose, duration=1000} = {...props}
  
  return (

    <div className={classes.root}>
    <Snackbar open={open} autoHideDuration={duration} onClose={handleAlertClose}  anchorOrigin={{"vertical":"top", "horizontal":"right"}}>
        <Alert onClose={handleAlertClose} severity={severity}>
          {message}
        </Alert>        
    </Snackbar>
    </div>
  );
}
