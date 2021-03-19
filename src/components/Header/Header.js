import { AppBar, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DesktopView from "./DesktopView";


import DisplayMobile from "./MobileView";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    }
}));

export default function Header() {
    const { header } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? <DisplayMobile /> : <DesktopView />}
            </AppBar>
        </header>
    );
}