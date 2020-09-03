import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, InputAdornment } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SubjectIcon from '@material-ui/icons/Subject';
import { makeStyles } from '@material-ui/styles';
import people from '../assets/img/people.svg'


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: "#212325",
    },
    text: {
        width: "450px",
        marginBottom: "20px",
        color: "#44475A",
        '& label.Mui-focused': {
            color: '#44475A',
        },
    },
    button: {
        backgroundColor: "#4DD779"
    },
    form: {
        // backgroundColor: "#212325",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "10px",
        paddingRight: "10px"
    }
    
    // title: {
    //     textAlign: "center"
    // }
});


const About = (props) => {
    const classes = useStyles();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
        console.log(values);
    }


    return (
            <div className={classes.root}>
                <img src={people} width={150} height={150} />
                <form onSubmit={() => onSubmit()} className={classes.form}> 
                    <TextField
                        label="Email"
                        variant="outlined"
                        error={false}
                        InputLabelProps={{}}
                        className={classes.text}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <br/>
                    <TextField
                        label="Header"
                        variant="outlined"
                        error={false}
                        InputLabelProps={{}}
                        className={classes.text}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SubjectIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <br/>
                    <TextField
                        label="Message"
                        variant="outlined"
                        error={false}
                        InputLabelProps={{}}
                        className={classes.text}
                        multiline
                        rows={10}
                    />
                    <br/>
                    <Button variant="contained" className={classes.button}>
                        <Typography style={{color: "white"}}> SEND  </Typography>
                        <TelegramIcon/>
                    </Button>
                </form>
            </div>
    )
}


export default About;