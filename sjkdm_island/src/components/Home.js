import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import SkillItem from './SkillItem';
import { makeStyles } from '@material-ui/styles';
import techSkills from '../data/techSkills.json';
import interestSkills from '../data/interests.json';
import CastleIcon from './CastleIcon';


const useStyles = makeStyles({
    body: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "space-around",
        flexDirection: "column",
        backgroundColor: "#121414",
        borderRadius: "10px",
        paddingTop: "20px",
        paddingLeft: "15px",
        paddingRight: "15px",
    },
    title: {
        fontFamily: "UnifrakturMaguntia",
        fontSize: "50px",
        color: "white",
        textAlign: "center",
        marginBottom: "30px",
    },
    subtitle: {
        fontFamily: "Space Mono, mono space",
        fontSize: "18px",
        color: "white",
        textAlign: "center",
        marginBottom: "50px"
    },
    description: {
        fontFamily: "Space Mono, mono space",
        fontSize: "17px",
        color: "white",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px"
    },
    castleLogo: {

    }
});



const Home = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <div>
                <div className={classes.body}>
                    <Typography variant="h1" className={classes.title}>
                        Welcome to my castle
                    </Typography>
                    <Typography variant="h5" className={classes.subtitle}>
                        The beginning of a long journey has just started!
                    </Typography>
                    <CastleIcon />
                    <Typography variant="body2" className={classes.description} >
                        I'm a 25 years old software developer from Mexico interested in learning     
                        and understanding <br/> backend development, databases and machine learning, and of course
                        a little bit of front end. <br/> <br/>
                        My main skill is to be an autodidact and I'm always curious on how things work  <br/>
                        from scratch and that's why <br/> I wrote this website! <br/>
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12}>
                        <SkillItem skills={interestSkills} kind="interests"/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <SkillItem skills={techSkills} kind="tech" />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Home;