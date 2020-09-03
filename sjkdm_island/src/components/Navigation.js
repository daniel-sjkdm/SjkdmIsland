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
        marginBottom: "40px",
        backgroundColor: "#121414"
    },
    title: {
        flexGrow: 1,
        fontFamily: "UnifrakturMaguntia",
        fontSize: "30px"
    },
    link: {
        paddingRight: "15px",
        paddingLeft: "15px",
        color: "white"
    }
}));


const Navigation = (props) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography 
                        variant="h5"
                        className={classes.title}
                    > Sjukdom Castle </Typography>
                
                <div style={{display: "flex"}}>
                    <Link to="/projects">
                        <Typography className={classes.link}>
                            Projects
                        </Typography>
                    </Link>
                    <Link to="/about">
                        <Typography className={classes.link}>
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