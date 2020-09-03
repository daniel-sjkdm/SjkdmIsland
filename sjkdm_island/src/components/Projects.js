import React, { useState, useEffect } from 'react';
import Project from './ProjectItem';
import project_list from '../data/projects.json';
import {
    Container,
    Grid,
    Box
} from '@material-ui/core';
import axios from 'axios';

const Projects = (props) => {

    const [projects, setProjects] = useState([]);
    const [test, setTest] = useState([])
    
    useEffect(() => {
        const fetchProjects = () => {
            setProjects(project_list);
        }
        fetchProjects();
    }, []);
    
    return (
        <div>
            <Container>
                <Grid container spacing={4}>
                        {
                            projects.map((project) => (
                                <Grid item lg={4} md={6} sm={12} key={project.id}>
                                    <Box>
                                        <Project 
                                            title = {project.title} 
                                            description = {project.description} 
                                            link = {project.link}
                                            tags = {project.tags}
                                        />
                                    </Box>
                                </Grid>
                            ))
                        }
                </Grid>
            </Container>
        </div>
    );
}

export default Projects;