import React from 'react'

function Nav() {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <a href={`#about`}>Maribel Rivera</a>
                    <a href={`#about`}>About Me</a>
                    <a href={`#projects`}>Projects</a>
                    <a href={`#contact`}>Contact Me</a>
                </ul>
            </nav>
        </>
    )
}

export default Nav

// When Link is added Error: You should not use Link outside a Router appears and when router added in app.js got Error: Cannot ready property location of undefined