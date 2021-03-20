import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        margin: '10px 5px'
    },
    button: {
        display: 'block',
        margin: 'auto'
    },
    mt: {
        marginTop: '20px'
    },
    strong: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'deepskyblue'
    }
}))