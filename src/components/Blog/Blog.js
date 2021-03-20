import { Typography } from '@material-ui/core';
import React from 'react';

const Blog = () => {
    return (
        <div style={{paddingTop: '100px'}}>
            <Typography variant="h2" color="primary" align="center">
                This is Blog Page
            </Typography>
            <Typography variant="h6" color="primary" align="center">
                This is page will coming soon...
            </Typography>
        </div>
    );
};

export default Blog;