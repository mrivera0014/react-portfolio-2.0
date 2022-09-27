import React from 'react'
import { useState } from 'react'
import './Contact.css'

function Contact() {

    return (
        <div className='contactBody' id='contact'>
            <form id='contactForm' method='POST' action='https://formsubmit.co/mrivera0014@gmail.com' encType='multipart/form-data'>
                <input type="hidden" name="_captcha" value="false"></input>
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
