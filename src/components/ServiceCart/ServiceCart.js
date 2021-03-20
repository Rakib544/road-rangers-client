import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        backgroundColor: '#FFFFFF'
    },
    img: {
        width: '160px',
        height: '140px'
    },
}))

const ServiceCart = ({ service }) => {
    const { serviceImage, serviceName, serviceType } = service;
    const classes = useStyles()

    const history = useHistory()
    const goToDestinationPage = () => {
        history.push(`/destination/${serviceType}`)
    }
    return (
        <Grid item lg="3" md="4" sm="6" xs="12" onClick={goToDestinationPage} align="center" >
            <Paper className={classes.paper}>
                <ButtonBase>
                    <img src={serviceImage} alt={serviceName} className={classes.img} />
                </ButtonBase>
                <Typography variant="h6" align="center">
                    {serviceName}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ServiceCart;