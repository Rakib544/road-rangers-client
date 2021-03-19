import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fakeData } from '../../FakeData/data';
import SearchResultCart from '../SearchResultCart/SarchResultCart';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(4)
    },
    textField: {
        width: '100%',
        margin: '10px 0'
    }
}))

const Destination = () => {
    const classes = useStyles()
    const { serviceType } = useParams()
    const [selectedService, setSelectedService] = useState({})

    useEffect(() => {
        const selectedServiceData = fakeData.find(service => service.serviceType === serviceType);
        setSelectedService(selectedServiceData)
    }, [serviceType])

    console.log(selectedService)
    const { availableService } = selectedService;
    return (
        <Container maxWidth="lg">
            <Grid container style={{ paddingTop: '100px' }} spacing={4}>
                <Grid item lg="4">
                    <Paper className={classes.paper}>
                        <TextField id="standard-basic" label="Pick From" className={classes.textField} />
                        <TextField id="standard-basic" label="Pick To" className={classes.textField} />
                        <Button variant="contained" color="primary">Search</Button>
                    </Paper>
                </Grid>
                <Grid item lg="4">
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary">
                            Pick From place
                        </Typography>
                        <Typography variant="h6" color="primary">
                            Pick To place
                        </Typography>
                        <Grid container direction="column">
                            {
                                availableService && availableService.map(service => <SearchResultCart selectedService={selectedService} key={service.serviceType} />)
                            }
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item lg="8">
                    <h2>Google Maps</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;