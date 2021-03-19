import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import {UserContext} from '../../App'

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        margin: '10px 5px'
    }
}))

const Form = () => {
    const [isLoggedIn] = useContext(UserContext)
    const classes = useStyles();
    return (
        <from>
            {isLoggedIn.email ? <Typography variant="h4">Create an Account</Typography> : <Typography variant="h4">Login</Typography>}
            {isLoggedIn.email && <TextField id="standard-basic" label="Name" className={classes.textField} />}
            <TextField id="standard-basic" label={isLoggedIn.email ? "Username or Email" : "Email"} className={classes.textField}/>
            <TextField id="standard-basic" label="Password" className={classes.textField}/>
            {isLoggedIn.email && <TextField id="standard-basic" label="Confirm Password" className={classes.textField}/>}
            <Button type="submit" variant="contained" color="primary">{isLoggedIn.email ? 'Create Account' : 'Login'}</Button>
        </from>
    );
};

export default Form;