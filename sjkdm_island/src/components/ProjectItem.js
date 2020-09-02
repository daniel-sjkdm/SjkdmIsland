import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Paper,
    Button,
    Typography,
    Badge,
    CardActions
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    Card: {
        width: "400px",
        height: "350px"   
    },
    CardHeader: {
        textAlign: "center",
        backgroundColor: "white"
    }
}));

const ProjectItem = ({title, description, link, tags}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.Card}>
                <CardHeader title={title} className={classes.CardHeader}/>
                <CardContent>
                    <Typography 
                        variant="body2"
                        styles={{
                            textAlign: "justify"
                        }}> { description } </Typography>
                <p> Tags: </p>
                <div>
                    {
                        tags.map((tag, index) => (
                            <Typography
                                variant="body2"
                                component="p"
                                key={index}
                                style={{ 
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                }}>
                                { tag }
                            </Typography>
                        ))
                    }
                </div>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        variant="contained" 
                        color="primary" 
                        href={link}
                    > View </Button>
                </CardActions>
            </Card>
        </div>
    );
}


export default ProjectItem;