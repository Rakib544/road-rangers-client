import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializedLogInFrameWork, singInUserWithEmailAndPassword } from './LogInManager';

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
    const [newUser, setaNewUser] = useState(false)
    const classes = useStyles();
    const [user, setUser] = useState({ name: '', email: '', password: '', confirm_password: '', error: '', success: false })
    const [inputError, setInputError] = useState({ emailError: false, passwordError: false, confirmPassWordError: false })
    const [loggedUser, setLoggedUser] = useContext(UserContext)

    const toggleForm = () => {
        setaNewUser(!newUser)
    }
    const handleBlur = e => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            const newUserInput = { ...inputError }
            newUserInput.emailError = !isFieldValid
            setInputError(newUserInput)
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 8
            const newUserInput = { ...inputError }
            newUserInput.passwordError = !isFieldValid
            setInputError(newUserInput)
        }

        if (isFieldValid) {
            const newUser = { ...user }
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }
    }

    initializedLogInFrameWork()

    //handling google signIn
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedUser(res.user)
            })
            .catch(err => setLoggedUser(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (newUser && user.email && user.password) {
            if (user.password === user.confirm_password) {
                const newInputError = { ...inputError }
                newInputError.confirmPassWordError = false
                setInputError(newInputError)

                //signUp with email and password functionality
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                    .then(res => {
                        setUser(res)
                        setLoggedUser(res)
                    })
                    .catch(err => {
                        setUser(err)
                        setLoggedUser(err)
                    })
            }
            else {
                const newInputError = { ...inputError }
                newInputError.confirmPassWordError = true
                setInputError(newInputError)
            }
        }
        if (!newUser && user.email && user.password) {
            singInUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedUser(res)
                })
                .catch(err => {
                    setUser(err)
                    setLoggedUser(err)
                })
        }
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            {newUser ? <Typography variant="h4">Create an Account</Typography> : <Typography variant="h4">Login</Typography>}

            {newUser && <TextField label="Name" name="name" onBlur={handleBlur} className={classes.textField} />}
            <TextField label={newUser ? "Username or Email" : "Email"} className={classes.textField} name="email" onBlur={handleBlur} error={inputError.emailError} helperText={inputError.emailError && "Incorrect email"} />
            <TextField label="Password" className={classes.textField} name="password" onBlur={handleBlur} type="password" error={inputError.passwordError} helperText={inputError.passwordError && "Password must have 8 character"} />
            {newUser && <TextField label="Confirm Password" name="confirm_password" onBlur={handleBlur} className={classes.textField} type="password" error={inputError.confirmPassWordError} helperText={inputError.confirmPassWordError && "Can't match with the password field"} />}
            <Button type="submit" variant="contained" color="primary">{newUser ? 'Create Account' : 'Login'}</Button>
            <p className={classes.mt}></p>
            {
                newUser
                    ? <Typography variant="subtitle1" align="center">Already have an account ? <strong className={classes.strong} onClick={toggleForm} >SignIn here</strong></Typography>
                    : <Typography variant="subtitle1" align="center">Don't have an account ? <strong className={classes.strong} onClick={toggleForm}>Create an account</strong></Typography>
            }
            <Typography variant="subtitle1" color="primary" align="center">Or</Typography>
            <Button variant="contained" color="primary" className={classes.button} onClick={googleSignIn}>Sign in with google</Button>
            
            <br />
            <Typography variant="subtitle1" color="secondary">
                {user.error}
            </Typography>
            {
                user.success && <Typography variant="subtitle1" color="primary" align="center">
                    User {newUser ? 'Created' : 'Log In'} Successfully
          </Typography>
            }
        </form>
    );
};

export default Form;