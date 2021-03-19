import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Form from './Form';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(4)
    },
    spacingTop: {
        paddingTop: '80px'
    },
    grid: {
        margin: 'auto'
    }
}))

const Login = () => {
    const classes = useStyles()
    return (
        <div className={classes.spacingTop}>
            <Container maxWidth="md" justify="center">
                <Grid lg="8" className={classes.grid}>
                    <Paper className={classes.paper}>
                        <Form />
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;