import React from 'react'
import './Contact.css'

function Contact() {

    const form = document.getElementById('contactForm')

    //when event triggered create object called mail based on input name attributes
    const formEvent = form.addEventListener('submit', (event) => {
        event.preventDefault();

        let mail = new FormData(form)

        //calling function with mail as parameter
        submitEmail(mail)
    })

    const submitEmail = mail => {
        fetch('https://mrivera0014.github.io/react-portfolio-2.0/send', {
            method: 'post',
            body: mail,
        }).then((response) => {
            return response.json()
        });
    };

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
