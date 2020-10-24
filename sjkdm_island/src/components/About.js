import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button, Typography, InputAdornment, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import TelegramIcon from '@material-ui/icons/Telegram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SubjectIcon from '@material-ui/icons/Subject';
import { makeStyles, withStyles } from '@material-ui/styles';
import people from '../assets/img/people.svg';



const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
    },
    text: {
        width: "-webkit-fill-available",
        marginBottom: "20px",
        color: "white",
    },
    button: {
        backgroundColor: "#4DD779"
    },
    form: {
        backgroundColor: "#121414",
        marginTop: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "5px"
    },
    icon: {
        color: "#4DD779"
    }
});


const CustomTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#4DD779"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#4DD779"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#4DD779",
            },
            "&:hover fieldset": {
              borderColor: "#4DD779",
            },
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4DD779"
            },
            "& .MuiInputLabel-outlined": {
                color: "white"
            }
        },
        color: "white",
        "& .MuiFormLabel-root": {
            color: "white",
        },
        "& .MuiInputBase-root": {

        }
    },

})(TextField);


const About = (props) => {

    const classes = useStyles();
    const { handleSubmit, register, errors } = useForm();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };


    const sendEmail = (values) => {

        emailjs.send(
            "gmail", 
            "template_2c8k2cv", 
            {
                subject: values.subject,
                email: values.email,
                message: values.message
            },
            "user_8dpnAh6jdqHYTcRzH2dOa"
        )
        .then(result => {
            setOpen(true);
        }, error => {
            alert("There was an error in the EmailJS server");
            console.log(error);
        })
    }


    return (
        <Grid container className={classes.root}> 
            <Grid item lg={12} md={12} xs={12}>
                    <img src={people} width={150} height={150} alt=""/>
            </Grid>
            <Grid item lg={12} md={12} xs={12} style={{ width: "600px" }}>
                    <form onSubmit={handleSubmit(sendEmail)} className={classes.form}> 
                    <CustomTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        error={errors.email? true : false}
                        InputLabelProps={{}}
                        className={classes.text}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon className={classes.icon}/>
                                </InputAdornment>
                            )
                        }}
                        inputRef={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
                        })}
                        autoComplete="false"
                        helperText={errors.email? (
                            errors.email.required? "This field is required" : "Invalid email"
                        ): ""}
                    />
                    <br/>
                    <CustomTextField
                        name="subject"
                        label="Subject"
                        variant="outlined"
                        error={errors.subject? true : false}
                        InputLabelProps={{}}
                        className={classes.text}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SubjectIcon className={classes.icon}/>
                                </InputAdornment>
                            )
                        }}
                        inputRef={register({
                            required: true,
                        })}
                        autoComplete="false"
                        helperText={errors.subject? "This field is required" : ""}
                    />
                    <br/>
                    <CustomTextField
                        name="message"
                        label="Message"
                        variant="outlined"
                        error={errors.message? true : false}
                        InputLabelProps={{}}
                        className={classes.text}
                        multiline
                        rows={10}
                        inputRef={register({
                            required: true
                        })}
                        autoComplete="false"
                        helperText={errors.message? "This field is required" : ""}
                    />
                        <br/>
                        <Button variant="contained" className={classes.button} type="submit">
                            <Typography style={{color: "white"}}> SEND  </Typography>
                            <TelegramIcon/>
                        </Button>
                    </form>
                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success"> Thank you for the message </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
    )
}


export default About;