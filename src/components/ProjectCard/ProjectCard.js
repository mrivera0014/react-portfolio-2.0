import React, { useState } from 'react'
import project from './ProjectList'
import './ProjectCard.css'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'

function ProjectCard() {
    const [projectDesc, setProjectDesc] = useState(false)
    const showDesc = () => setProjectDesc(!projectDesc)
    return (
        <div className='body'>
            <h1 className='projectsTitle'>Projects</h1>
            <section className='projectSection'>
                {project.map(project => {
                    return (
                        <div key={project.id} className='projectCard'>
                            <h3 className='projectTitle'>{project.title}</h3>
                            <img className='projectImg' src={process.env.PUBLIC_URL + project.image} alt={project.imageAlt} />
                            <p className='projectDesc'><FiIcons.FiMoreVertical onClick={showDesc} />Description: {project.description}</p>
                            <a className='projectLinks' href={project.github} ><FaIcons.FaGithub /> Repository</a>
                            <a className='projectLinks' href={project.deployed}><FaIcons.FaRocket /> Deployed Application</a>
                        </div>
                    )
                })}
            </section>
        </div >
    )
}

export default ProjectCard