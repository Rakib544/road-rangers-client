import { Button, ButtonGroup, IconButton, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(() => ({
    buttonStyle: {
        border: '0',
        color: '#fff'
    }
}))

const GetDrawerChoices = () => {
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
        history.push(`/destination`)
    }
    const goToBlogPage = () => {
        history.push(`/blog`)
    }
    const handleSignOut = () => {
        setLoggedUser({})
    }
    return (
        <ButtonGroup orientation="vertical" >
            <Button className={classes.buttonStyle} onClick={goToHomePage}>Home</Button>
            <Button className={classes.buttonStyle} onClick={goToDestinationPage}>Direction</Button>
            <Button className={classes.buttonStyle} onClick={goToBlogPage}>Blog</Button>
            <Button className={classes.buttonStyle} onClick={goContactPage}>Contact</Button>
            {
                loggedUser.email
                    ? (
                        <>
                            <Button className={classes.buttonStyle}>{loggedUser.displayName || loggedUser.email}</Button>
                            <IconButton onClick={handleSignOut} className={classes.buttonStyle}><ExitToAppIcon /></IconButton>
                        </>
                    )
                    : <Button onClick={goToLoginPage} className={classes.buttonStyle}>Login</Button>
            }
        </ButtonGroup>
    )

};

export default GetDrawerChoices;