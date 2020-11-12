import React from 'react'
import Card from './Card.js'

const ProjectsObject = [
    {
        title: "Title1",
        description: "Description1",
        link: "link1"
    },
    {
        title: "Title2",
        description: "Description2",
        link: "link2"
    }

]

const ProjectBox = () => {
    return(
        <>
        <h6>Some Projects</h6>
        <p>{ProjectsObject.map((banana) => {
            return(
            <Card 
                title={banana.title}
                description={banana.description}
                link={banana.link}
            />
        )})}</p>
        </>
    );
};

export default ProjectBox;