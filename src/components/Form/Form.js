import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contactBody' id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <form className='contactForm'>
                <div className="nameSection">
                    <p className="formText">Name:</p>
                    <input type="text" className="userInput" id="exampleinputname" />
                </div>
                <div className="emailSection">
                    <p className="formText">Email:</p>
                    <input type="email" className="userInput" id="exampleInputEmail1" />
                </div>
                <div className="messageSection">
                    <p className="formText">Message:</p>
                    <textarea className="userInput" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    )
}

export default Contact
