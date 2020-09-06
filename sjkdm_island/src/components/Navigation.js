import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "40px",
        backgroundColor: "#121414"
    },
    title: {
        flexGrow: 1,
        fontFamily: "UnifrakturMaguntia",
        fontSize: "25px"
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
                        className={classes.title}
                    > Sjukdom Castle </Typography>
                <div style={{display: "flex"}}>
                    <Link to="/SjukdomCastle">
                        <Typography className={classes.link}>
                            Home
                        </Typography>
                    </Link>
                    <Link to="/SjukdomCastle/projects">
                        <Typography className={classes.link}>
                            Projects
                        </Typography>
                    </Link>
                    <Link to="/SjukdomCastle/about">
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