import { CardMedia, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData/data'
import bgImage from '../../images/rakib.jpg'
import ServiceCart from '../ServiceCart/ServiceCart';
const useStyles = makeStyles(() => ({
    backgroundImg: {
        height: '100vh',
        width: '100vw',
        objectFit: 'contain',
        "@media (max-width: 900px)": {
            height: '170vh',
        },

    },
    container: {
        paddingTop: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 900px)": {
            paddingTop: '150px',
        },        
    },
    bg: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'  
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
            <Container className={classes.bg}>
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        {services.map(service => <ServiceCart keys="serviceName" service={service} />)}
                    </Grid>
                </Container>
            </Container>
        </CardMedia>
    );
};

export default Home;