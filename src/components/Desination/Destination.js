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
    const [destination, setDestination] = useState({ pickFrom: '', pickTo: '' })
    const [showSearchPage, setShowSearchPage] = useState(true)

    useEffect(() => {
        const selectedServiceData = fakeData.find(service => service.serviceType === serviceType);
        setSelectedService(selectedServiceData)
    }, [serviceType])

    const { availableService } = selectedService;

    const handleBlur = e => {
        const newDestination = { ...destination }
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination)
    }
    console.log(destination)
    return (
        <Container maxWidth="lg">
            <Grid container style={{ paddingTop: '100px' }} spacing={4}>
                {
                    showSearchPage
                        ? (
                            <>
                                <Grid item lg="4">
                                    <Paper className={classes.paper}>
                                        <TextField id="standard-basic" name="pickFrom" label="Pick From" className={classes.textField} onBlur={handleBlur} />
                                        <TextField id="standard-basic" name="pickTo" label="Pick To" className={classes.textField} onBlur={handleBlur} />
                                        <TextField
                                            id="datetime-local"
                                            label="Next appointment"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <Button variant="contained" color="primary" onClick={() => setShowSearchPage(false)}>Search</Button>
                                    </Paper>
                                </Grid>
                            </>
                        )
                        : (
                            <>
                                <Grid item lg="4">
                                    <Paper className={classes.paper}>
                                        <Typography variant="h6" color="primary">
                                            {destination.pickFrom}
                                        </Typography>
                                        <Typography variant="h6" color="primary">
                                            {destination.pickTo}
                                        </Typography>
                                        <Grid container direction="column">
                                            {
                                                availableService && availableService.map(service => <SearchResultCart selectedService={selectedService} key={service.serviceType} />)
                                            }
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </>
                        )
                }
                <Grid item lg="8">
                    <h2>Google Maps</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;