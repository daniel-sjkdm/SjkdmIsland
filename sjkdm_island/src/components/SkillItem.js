import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemAvatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AI from '../assets/img/brain.svg';
import Backend from '../assets/img/server.svg';
import Frontend from '../assets/img/ux.svg';
import Databases from '../assets/img/database.svg';
import Linux from '../assets/img/computer.svg';


const interests_icon = [
    AI, 
    Backend,
    Frontend,
    Databases,
    Linux
];


const useStyles = makeStyles({
    title: {
        fontFamily: "UnifrakturMaguntia",
        textAlign: "center",
        color: "white",
        paddingTop: "20px"
    },
    item: {
        color: "white", 
        fontFamily: "Space Mono, mono space"
    },
    paper: {
        height: "380px",
        borderRadius: "10px",
        backgroundColor: "#121414",
        marginTop: "20px"
    }
});



const SkillItem = ({skills, kind}) => {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.title}> { skills.title } </Typography>
                <List>
                    {
                        skills.content.map((skill, index) => (
                            <ListItem key={index}>
                                { 
                                    kind === "interests" ? (
                                            <ListItemAvatar>
                                                <img src={interests_icon[index]} width={37} height={37}/>
                                            </ListItemAvatar>
                                    ) : "" 
                                }
                                <ListItemText primary={<Typography className={classes.item}> {skill.skill} </Typography>} disableTypography={true} />
                                {
                                    skill.level? ( 
                                        [1, 2, 3, 4, 5].map((n, index) => (
                                            n <= skill.level ? (
                                                <StarIcon key={index} style={{ color: "#4DD779" }} />
                                            ): <StarBorderIcon key={index} style={{ color: "#4DD779" }} />
                                        ))
                                    ) : ""
                                }
                            </ListItem>
                        ))
                    }
                </List>
            </Paper>
        </div>
    );
}


export default SkillItem;