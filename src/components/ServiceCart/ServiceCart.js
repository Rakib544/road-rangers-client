import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3)
    }
}))

const ServiceCart = ({ service }) => {
    const { serviceImage, serviceName, serviceType } = service;
    const classes = useStyles()

    const history = useHistory()
    const goToDestinationPage = () => {
        history.push(`/destination/${serviceType}`)
    }
    return (
        <Grid item lg="3" onClick={goToDestinationPage} >
            <Paper className={classes.paper}>
                <ButtonBase>
                    <img src={serviceImage} alt={serviceName} style={{ width: '100%' }} />
                </ButtonBase>
                <Typography variant="h6" align="center">
                    {serviceName}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ServiceCart;