import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Hidden } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarList from './SideBarList';




const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "40px",
        backgroundColor: "#121414"
    },
    title: {
        flexGrow: 1,
        fontFamily: "UnifrakturMaguntia",
        fontSize: "25px",
        "&:hover": {
            color: "#4DD779"
        }
    },
    link: {
        paddingRight: "15px",
        paddingLeft: "15px",
        color: "white",
        textDecoration: "none",
    },
    link_title: {
        fontFamily: "UnifrakturMaguntia",
        fontSize: "22px",
        "&:hover": {
            color: "#4DD779"
        }
    }
}));


const CustomDrawer = withStyles({
    root: {
        backgroundColor: "rgba(238,238,238,0.4)"
    },
    paper: {
        backgroundColor: "#121414",
        width: "200px",
    }
})(Drawer);


const Navigation = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);    

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Shift' || event.key === 'Tab')) {
            return;
        }
        setOpen(open)
    }

    return (
        <div>
            <CustomDrawer
                anchor="left" 
                open={open} 
                onClose={toggleDrawer(false)}
            >
                <SideBarList handleClick={toggleDrawer}/>
            </CustomDrawer>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title}> Sjukdom Castle </Typography>
                <div style={{display: "flex"}}>
                    <Hidden xsDown>
                        <Link to="/SjukdomCastle" className={classes.link}>
                            <Typography className={classes.link_title}> Home </Typography>
                        </Link>
                        <Link to="/SjukdomCastle/projects" className={classes.link}>
                            <Typography className={classes.link_title}> Projects </Typography>
                        </Link>
                        <Link to="/SjukdomCastle/contact" className={classes.link}> 
                            <Typography className={classes.link_title}> Contact </Typography>
                        </Link>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon color="primary"/>
                        </IconButton>
                    </Hidden>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;