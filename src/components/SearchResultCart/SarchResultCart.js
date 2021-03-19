import { ButtonBase, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        margin: '10px 0'
    }
}))

const SearchResultCart = ({ selectedService }) => {
    const { serviceName, serviceImage, availableService } = selectedService;
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Grid container item lg='12'>
                <Grid item lg="3">
                    <ButtonBase>
                        <img src={serviceImage} alt={serviceName} style={{ width: '100%' }} />
                    </ButtonBase>
                </Grid>
                <Grid item lg="3">
                    {serviceName}
                </Grid>
                <Grid item lg="3">
                    {availableService[0].totalPassenger}
                </Grid>
                <Grid item lg="3">
                    $ {availableService[0].cost}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SearchResultCart;