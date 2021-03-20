import { CardMedia, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData/data'
import bgImage from '../../images/rakib.jpg'
import ServiceCart from '../ServiceCart/ServiceCart';
const useStyles = makeStyles(() => ({
    backgroundImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Home = () => {
    const classes = useStyles()
    const [services, setServices] = useState([])
    useEffect(() => {
        const data = fakeData;
        setServices(data)
    }, [])

    return (
        <CardMedia image={bgImage} className={classes.backgroundImg}>
            <Container maxWidth="md" className={classes.container}>
                <Grid container spacing={3}>
                    {services.map(service => <ServiceCart keys="serviceName" service={service} />)}
                </Grid>
            </Container>
        </CardMedia>
    );
};

export default Home;