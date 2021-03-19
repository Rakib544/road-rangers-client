import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
const useStyles = makeStyles(() => ({
    button: {
        color: '#fff',
    }, 
}))

const GetMenuButtons = () => {
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
    const goToDirectionPage = () => {
        history.push(`/destination`)
    }
    const goToBlogPage = () => {
        history.push(`/blog`)
    }
    return (
        <ButtonGroup variant="outlined">
            <Button onClick={goToHomePage} className={classes.button}>Home</Button>
            <Button onClick={goToDirectionPage} className={classes.button}>Destination</Button>
            <Button onClick={goToBlogPage} className={classes.button}>Blog</Button>
            <Button onClick ={goContactPage} className={classes.button}>Contact</Button>
            <Button onClick={goToLoginPage} className={classes.button}>Login</Button>
        </ButtonGroup>
    )
};

export default GetMenuButtons;