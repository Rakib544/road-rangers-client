import { CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import backgroundImage from '../../images/Bg.png'
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
    return (
        <CardMedia image={backgroundImage} className={classes.backgroundImg}>
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4">
                    This is home page
                </Typography>
            </Container>
        </CardMedia>
    );
};

export default Home;