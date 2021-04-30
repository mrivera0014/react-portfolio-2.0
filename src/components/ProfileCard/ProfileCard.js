import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as DiIcons from 'react-icons/fa'

import headshot from '../../assets/Images/headshot.jpg'
import './ProfileCard.css'

function ProfileCard() {
    return (
        <>
            <figure>
                <img className='profileCard' src={headshot} alt='maribel-rivera-headshot'></img>
                <p>Hello, my name is Maribel Rivera although I do prefer to go by Marble! I'm from Denver, CO. and worked at Starbucks for about five years. I also have experience with Microsoft Word, Excel, and AutoCAD. I first became interested about coding about two years ago when a friend talked to me about going to school to become a web developer. I decided to look into it more because it seemed very interesting. The more I researched the more I wanted to learn how to code myself. I began to have all these different ideas for projects that I could do if I did decide to take on this challenge. After a few months of planning out how to go about learning coding I decided that this was the right move to make, of course the pandemic happened and delayed my plans a little bit. Today I am going through the University of Denver's coding bootcamp and I am excited to see the progress I make throughout the course.</p>
            </figure>
            <ul>
                <a rel="noreferrer" target="_blank" href="https://github.com/mrivera0014"><FaIcons.FaGithub /></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/marblerivera/"><FaIcons.FaLinkedin /></a>
                <a rel='noreferrer' target='_blank' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'><FaIcons.FaGoogle /></a>
                <a><button>Resume</button></a>
            </ul>
        </>
    )
}

export default ProfileCard