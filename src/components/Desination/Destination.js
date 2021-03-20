import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fakeData } from '../../FakeData/data';
import GoogleMap from '../Map/GoogleMap';
import SearchResultCart from '../SearchResultCart/SarchResultCart';
import BasicTimeline from '../TimeLine/TimeLine';

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
    const [destination, setDestination] = useState({ pickFrom: '', pickTo: '', pickTime: '' })
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
    
    const {pickFrom, pickTo, pickTime} = destination
    return (
        <Container maxWidth="lg">
            <Grid container style={{ paddingTop: '100px' }} spacing={4}>
                {
                    showSearchPage
                        ? (
                            <>
                                <Grid item lg="4" md="4" sm="12" xs="12">
                                    <Paper className={classes.paper}> 
                                        <TextField name="pickFrom" label="Pick From" className={classes.textField} onBlur={handleBlur} />
                                        <TextField name="pickTo" label="Pick To" className={classes.textField} onBlur={handleBlur} />
                                        <TextField name="pickTime" label="Pick Up Time" type="datetime-local" className={classes.textField} InputLabelProps={{ shrink: true, }} onBlur={handleBlur} />
                                        <Button variant="contained" color="primary" onClick={() => setShowSearchPage(false)}>Search</Button>
                                    </Paper>
                                </Grid>
                            </>
                        )
                        : (
                            <>
                                <Grid item lg="4" md="4" sm="12" xs="12">
                                    <Paper className={classes.paper}>
                                        <div style={{ backgroundColor: '#400CCC', padding: '10px', borderRadius: '10px', color: 'white', textAlign:'left' }}>
                                            <BasicTimeline pickFrom={pickFrom} pickTo={pickTo} pickTime={pickTime} />
                                        </div>
                                        <Grid container direction="column">
                                            {
                                                availableService && availableService.map(service => <SearchResultCart service={service} selectedService={selectedService} key={service.serviceType} />)
                                            }
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </>
                        )
                }
                <Grid item lg="8" md="8" sm="12" xs="12">
                    <GoogleMap />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;

