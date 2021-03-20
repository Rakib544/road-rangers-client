import { Drawer, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import GetDrawerChoices from "./DrawerChoices";
import Logo from "./Logo";
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({ 
    toolbar: {
        display: "flex",
    },
    logo: {
        marginLeft: 'auto'
    },
    drawerContainer: {
        padding: "20px 30px",
        backgroundColor: '#400CCC',
        height: '100%'
    },
}))


const DisplayMobile = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push(`/home`)
    }
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const handleDrawerOpen = () =>
        setDrawerOpen(true)
    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }
    return (
        <Toolbar className={classes.toolbar}>
            <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
            >
                <div className={classes.drawerContainer} >{<GetDrawerChoices />}</div>
            </Drawer>

            <div className={classes.logo} onClick={goToHomePage}>
                { <Logo />}
            </div>
        </Toolbar>
    );
};

export default DisplayMobile;