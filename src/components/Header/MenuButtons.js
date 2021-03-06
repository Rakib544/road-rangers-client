import { Button, ButtonGroup, IconButton, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles(() => ({
    button: {
        color: '#fff',
        border: '0'
    },
}))

const GetMenuButtons = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const classes = useStyles()
    const history = useHistory();

    const goToHomePage = () => {
        history.push(`/home`)
    }
    const goToLoginPage = () => {
        history.push(`/login`)
    }
    const goContactPage = () => {
        history.push(`/contact`)
    }
    const goToDestinationPage = () => {
        history.push(`/destination/bike`)
    }
    const goToBlogPage = () => {
        history.push(`/blog`)
    }

    const handleSignOut = () => {
        setLoggedUser({})
    }
    return (
        <ButtonGroup variant="outlined">
            <Button onClick={goToHomePage} className={classes.button}>Home</Button>
            <Button onClick={goToDestinationPage} className={classes.button}>Destination</Button>
            <Button onClick={goToBlogPage} className={classes.button}>Blog</Button>
            <Button onClick={goContactPage} className={classes.button}>Contact</Button>
            {
                loggedUser.email
                    ? (
                        <>
                            <Button className={classes.button}>{loggedUser.displayName || loggedUser.email}</Button>
                            <IconButton onClick={handleSignOut} className={classes.button}><ExitToAppIcon /></IconButton>
                        </>
                    )
                    : <Button onClick={goToLoginPage} className={classes.button}>Login</Button>
            }
        </ButtonGroup>
    )
};

export default GetMenuButtons;