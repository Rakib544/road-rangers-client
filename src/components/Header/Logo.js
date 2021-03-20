import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        cursor: 'pointer'
    },
}))

const Logo = () => {
    const history = useHistory();
    const goToHomePage = () => {
        history.push(`/home`)
    }
    const classes = useStyles()
    return (
        <Typography variant="h6" component="h1" className={classes.logo} onClick={goToHomePage}>
            Road Ranger's
        </Typography>
    );
}

export default Logo;
