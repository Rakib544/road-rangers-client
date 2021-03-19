import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
}))

const Logo = () => {
    const classes = useStyles()
    return (
        <Typography variant="h6" component="h1" className={classes.logo}>
            Road Ranger's
        </Typography>
    );
}

export default Logo;
