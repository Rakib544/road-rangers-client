import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App'

const useStyles = makeStyles(theme => ({
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
        color: 'red',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
}))

const Form = () => {
    const [isLoggedIn] = useContext(UserContext)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const classes = useStyles();

    const toggleForm = () => {
        setIsSignUpForm(!isSignUpForm)
    }
    return (
        <from>
            {isSignUpForm ? <Typography variant="h4">Create an Account</Typography> : <Typography variant="h4">Login</Typography>}
            {isSignUpForm && <TextField label="Name" className={classes.textField} />}
            <TextField label={isSignUpForm ? "Username or Email" : "Email"} className={classes.textField} />
            <TextField label="Password" className={classes.textField} />
            {isSignUpForm && <TextField label="Confirm Password" className={classes.textField} />}
            <Button type="submit" variant="contained" color="primary">{isSignUpForm ? 'Create Account' : 'Login'}</Button>
            <p className={classes.mt}></p>
            {
                isSignUpForm
                    ? <Typography variant="subtitle1" align="center">Already have an account ? <strong className={classes.strong} onClick={toggleForm} >SignIn here</strong></Typography>
                    : <Typography variant="subtitle1" align="center">Don't have an account ? <strong className={classes.strong} onClick={toggleForm}>Create an account</strong></Typography>
            }
            <Typography variant="subtitle1" color="primary" align="center">Or</Typography>
            <Button variant="contained" color="primary" className={classes.button}>Sign in with google</Button>
        </from>
    );
};

export default Form;