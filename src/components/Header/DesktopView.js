import { makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Logo from './Logo';
import GetMenuButtons from './MenuButtons';

const useStyles = makeStyles(() => ({
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "auto",
    },
}))

const DesktopView = () => {
    const classes = useStyles()
    return (
        <Toolbar>
            {<Logo />}
            <div className={classes.menuButton}>{<GetMenuButtons />}</div>
        </Toolbar>
    );
};

export default DesktopView;