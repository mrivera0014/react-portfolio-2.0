import React, { useState } from 'react'
import './ProjectCard.css'
import ProjectImg from '../../assets/Images/Eat-The-Burger.PNG'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'

function ProjectCard() {
    const [projectDesc, setProjectDesc] = useState(false)
    const showDesc = () => setProjectDesc(!projectDesc)
    return (
        <div className='body'>
            <h1 className='projectsTitle'>Projects</h1>
            <section className='projectSection'>
                <h3 className='projectTitle'>Project Title</h3>
                <img className='projectImg' src={ProjectImg} />
                <p className='projectDesc'><FiIcons.FiMoreVertical onClick={showDesc} />Description of project will go here</p>
                <a className='projectLinks'><FaIcons.FaGithub /> Repository</a>
                <a className='projectLinks'><FaIcons.FaRocket /> Deployed Application</a>
            </section>
        </div>
    )
}

export default ProjectCard
