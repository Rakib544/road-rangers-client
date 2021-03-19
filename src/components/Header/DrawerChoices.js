import { Button, ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router";

const GetDrawerChoices = () => {
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
        <ButtonGroup orientation="vertical" color="primary" variant="outlined">
            <Button onClick={goToHomePage}>Home</Button>
            <Button onClick={goToDirectionPage}>Direction</Button>
            <Button onClick={goToBlogPage}>Blog</Button>
            <Button onClick ={goContactPage}>Contact</Button>
            <Button onClick={goToLoginPage}>Login</Button>
        </ButtonGroup>
    )

};

export default GetDrawerChoices;