import React, { useState, useEffect } from 'react';
import Project from './ProjectItem';
import project_list from '../data/projects.json';
import { Grid, Box } from '@material-ui/core';


const Projects = (props) => {

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = () => {
            setProjects(project_list);
        }
        fetchProjects();
    }, []);
    
    return (
        <div>
            <Grid container spacing={4}>
                    {
                        projects.map((project) => (
                            <Grid item lg={4} md={6} sm={12} key={project.id}>
                                <Box>
                                    <Project 
                                        title = {project.title} 
                                        description = {project.description} 
                                        url = {project.url}
                                        tags = {project.tags}
                                        website = {project.website? project.website : ""}
                                    />
                                </Box>
                            </Grid>
                        ))
                    }
            </Grid>
        </div>
    );
}

export default Projects;