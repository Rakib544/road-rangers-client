import { ButtonBase, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        margin: '10px 0'
    },
    mr : {
        marginRight: '5px'
    }
}))

const SearchResultCart = ({ service, selectedService }) => {
    const { serviceName, serviceImage } = selectedService;
    const {totalPassenger, cost, passengerIcon} = service;
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Grid container item lg='12' alignItems="center" justify="space-between">
                <Grid item lg="3" md="3" sm="3" xs="3">
                    <ButtonBase className={classes.mr}>
                        <img src={serviceImage} alt={serviceName} style={{ width: '100%' }} />
                    </ButtonBase>
                </Grid>
                <Grid item lg="3" md="3" sm="3" xs="3">
                    {serviceName}
                </Grid>
                <Grid item lg="3" md="3" sm="3" xs="3">
                <img src={passengerIcon} alt="" style={{height: '25px'}} /> {totalPassenger}
                </Grid>
                <Grid item lg="3" md="3" sm="3" xs="3">
                    $ {cost}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SearchResultCart;