import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillItem from './SkillItem';
import { makeStyles } from '@material-ui/styles';
import castle from '../assets/img/cultures.svg';
import background from '../assets/img/backgroun2.jpg';
import techSkills from '../data/techSkills.json';
import softSkills from '../data/softSkills.json';
import interestSkills from '../data/interests.json';



const useStyles = makeStyles({
    root: {
        // backgroundColor: "#212325",
        height: "100vh"
    },
    body: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "space-around",
        flexDirection: "column"
    },
    title: {
        // fontFamily: "Libre Baskerville, serif",
        fontFamily: "Catamaran', sans-serif",
        fontSize: "70px",
        color: "black",
        textAlign: "center",
        marginBottom: "10px"
    },
    subtitle: {
        fontFamily: "Catamaran', sans-serif",
        color: "black",
        textAlign: "center",
        marginBottom: "20px"
    },
    description: {
        fontFamily: "Catamaran', sans-serif",
        fontSize: "23px",
        color: "black",
        textAlign: "center"
    }
});



const Home = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <Typography variant="h1" className={classes.title}>
                    Welcome to my castle
                </Typography>
                <Typography variant="h5" className={classes.subtitle}>
                    The beginning of a long journey has just started!
                </Typography>
                <img src={castle} width={150} height={150} />
                <Typography variant="body2" className={classes.description} >
                    I'm a software developer from Mexico interested in learning  <br/>
                    and understanding new technologies and improving my skills   <br/>
                    to keep building this castle the best way I can.
                </Typography>
            </div>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} sm={12}>
                    <SkillItem skills={interestSkills} />
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <SkillItem skills={softSkills} />
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <SkillItem skills={techSkills} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;