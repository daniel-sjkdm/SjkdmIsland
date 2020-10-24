import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = makeStyles({
    list: {
        "&:hover": {
            backgroundColor: "rgba(238,238,238,0.1)",
        }
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
});



const routes = [
    {
        "name": "Home",
        "url": "/SjukdomCastle",
        "icon": <HomeIcon style={{color:"white"}}/>
    },
    {
        "name": "Projects",
        "url": "/SjukdomCastle/projects",
        "icon": <CodeIcon style={{color:"white"}}/>
    },
    {
        "name": "Contact",
        "url": "/SjukdomCastle/contact",
        "icon": <ContactMailIcon style={{color:"white"}}/>
    }
]



const SideBarList = ({handleClick}) => {
    const classes = useStyles();    
    return (
        <div onClick={handleClick(false)}>
            {
                routes.map((item, index) => (
                    <List key={index} className={classes.list}>
                        <Link to={item.url} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon> {item.icon} </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </List>
                ))
            }
        </div>
    )

}


export default SideBarList;