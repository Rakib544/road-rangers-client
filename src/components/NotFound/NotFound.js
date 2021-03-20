import { Typography } from '@material-ui/core';
import React from 'react';

const NotFound = () => {
    return (
        <div style={{paddingTop: '100px'}}>
            <Typography variant="h2" color="secondary" align="center">
                404
            </Typography>
            <Typography variant="h6" color="secondary" align="center">
               Opps Page Not Found..
            </Typography>
        </div>
    );
};

export default NotFound;