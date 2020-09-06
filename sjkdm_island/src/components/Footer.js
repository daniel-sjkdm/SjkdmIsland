import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#121414",
        marginTop: "50px"
    },
    content: {
        textAlign: "center",
        color: "white",
        marginTop: "30px"
    },
    githubicon: {
        color: "white",
        width: "40px",
        height: "40px",
        marginTop: "10px"
    }
});



const Footer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
            <Grid container>
                <Grid item lg={6} md={6} xs={6}>
                    <Typography className={classes.content}> You can find me at </Typography>
                        <IconButton href="https://github.com/daniel-sjkdm" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>  
                                <GitHubIcon className={classes.githubicon}/>
                        </IconButton>
                    <p style={{color: "white", textAlign: "center", fontSize: "13px"}}> github.com/daniel-sjkdm </p>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <Typography className={classes.content}> This site was built with </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                disableTypography={true} 
                                primary={
                                    <a style={{ color: "white", fontSize: "15px" }} href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"> React.js </a>
                                } 
                                style={{textAlign: "center"}}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                disableTypography={true} 
                                primary={
                                    <a style={{ color: "white", fontSize: "15px" }} href="https://material-ui.com/" target="_blank" rel="noopener noreferrer"> Material-UI </a>
                                }
                                style={{textAlign: "center"}}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                disableTypography={true} 
                                primary={
                                    <a style={{ color: "white", fontSize: "15px" }} href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer"> EmailJS </a>
                                }
                                style={{textAlign: "center"}}
                            />
                        </ListItem>
                    </List>
                </Grid>    
                <Grid item lg={12} md={12} xs={12}>
                    <Typography className={classes.content}>
                        Icons made by 
                        <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="Freepik" style={{ color: "#4DD779" }}> Freepik </a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#4DD779" }} title="Flaticon"> www.flaticon.com</a>
                    </Typography>
                </Grid>
            </Grid>         
        </div>
    );
}

export default Footer;