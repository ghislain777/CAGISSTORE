import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
    //  backgroundColor: deepOrange[500],
    },
    rounded: {
      color: '#fff',
      backgroundColor: green[500],
    },
    large: {
        width: theme.spacing(35),
        height: theme.spacing(16),
      },
  }));
export default function LogoClient() {
    const classes = useStyles();
  return (
    <>
    <img src="/admin/assets/images/logos/big.png" alt= "logo"/>

    </>
  );
}
