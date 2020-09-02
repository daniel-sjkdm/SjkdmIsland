import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core';
import {
    MenuIcon
} from '@material-ui/icons/Menu';
import {
    makeStyles
} from '@material-ui/styles';
import '../assets/css/Navigation.css';


const useStyles = makeStyles(theme => ({
    // offset: theme.mixins.toolbar
    root: {
        marginBottom: "40px"
    }
}));


const Navigation = (props) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar>
                    <Typography 
                        variant="h5"
                    > Sjukdom Island </Typography>
                
                <div style={{display: "flex"}}>
                    <Link to="/projects">
                        <Typography>
                            Projects
                        </Typography>
                    </Link>
                    <Link to="/about">
                        <Typography>
                            About
                        </Typography>
                    </Link>
                </div>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );
}

export default Navigation;