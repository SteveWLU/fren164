import React from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

// To override MUI styles, use makeStyles hook and create const in component below. This is how to embed CSS into MUI.

const useStyles = makeStyles({
    cssStyles: {
      fontStyle: "oblique",
      color: "black",
      flex: 1
    }
  })

const Header = () => {

    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.cssStyles} variant="h1" color="primary">French 164, Fall 2021</Typography>
                <AcUnitIcon />
                <Button fullWidth variant="contained" color="primary">Primary</Button>
                <Button fullWidth variant="contained" color="secondary">Secondary</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;