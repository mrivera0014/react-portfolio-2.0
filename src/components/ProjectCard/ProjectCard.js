import React, { Component, useState } from 'react'
import data from './ProjectList.json'
import './ProjectCard.css'
// import ProjectImg from '../../assets/Images/Eat-The-Burger.PNG'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'

function ProjectCard() {
    const [projectDesc, setProjectDesc] = useState(false)
    const showDesc = () => setProjectDesc(!projectDesc)
    return (
        <div className='body'>
            <h1 className='projectsTitle'>Projects</h1>
            <section className='projectSection'>
                {data.map(project => {
                    return (
                        <div>
                            <h3 className='projectTitle'>{project.title}</h3>
                            <img className='projectImg' src={project.image} />
                            <p className='projectDesc'><FiIcons.FiMoreVertical onClick={showDesc} />Description of project will go here</p>
                            <a className='projectLinks'><FaIcons.FaGithub /> Repository</a>
                            <a className='projectLinks'><FaIcons.FaRocket /> Deployed Application</a>
                        </div>
                    )
                })}

            </section>
        </div>
    )
}

export default ProjectCard
// onClick = { showDesc }
