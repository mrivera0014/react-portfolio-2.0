import React from 'react'
import './Contact.css'

function Contact() {



    return (
        <div className='contactBody' id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <form id='contactForm' method='POST' action='send' encType='multipart/form-data'>
                <div className="nameSection">
                    <p className="formText">Name:</p>
                    <input type="text" className="userInput" name='name' required />
                </div>
                <div className="emailSection">
                    <p className="formText">Email:</p>
                    <input type="email" className="userInput" name='email' required />
                </div>
                <div className="messageSection">
                    <p className="formText">Message:</p>
                    <textarea className="userInput" name='message' required></textarea>
                </div>
                <button type="submit" className="button" value="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
