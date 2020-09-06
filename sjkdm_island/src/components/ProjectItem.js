import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    Typography,
    CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        height: "350px",
        borderRadius: "30px",
        boxShadow: "-30px 20px 20px rgba(0, 0, 0, 0.3)",
        border: "1px solid #4DD779",
        backgroundColor: "#121414",
    },
    cardHeader: {
        fontFamily: "Space Mono, mono space",
        textAlign: "center",
        backgroundColor: "#222222",
        color: "white"
    },
    cardBody: {
        color: "white",
        fontFamily: "Space Mono, mono space",
        textAlign: "justify"
    }
}));


const ProjectItem = ({title, description, link, tags}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader 
                    disableTypography={true} 
                    title={<Typography style={{
                        fontFamily: "Space Mono, mono space"
                    }}> { title } </Typography>}
                    className={classes.cardHeader}/>
                <CardContent> 
                        <p style={{color: "#4DD779", fontFamily: "Space Mono, mono space"}}> sjukdom@castle $ ./project.sh   </p> 
                        <Typography variant="body2" className={classes.cardBody}>
                        { description } 
                        <br/>
                        <br/>
                        Tags:
                        <br/>
                        <br/> 
                    { 
                        tags.map((tag, index) => (
                            index === tags.length-1? ( 
                                tag 
                            ) : tag + ", "
                        )) 
                    }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        variant="contained" 
                        color="inherit"
                        href={link}
                    > View </Button>
                </CardActions>
            </Card>
        </div>
    );
}


export default ProjectItem;