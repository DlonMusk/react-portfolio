import './index.css';
import React from 'react';
import emailjs from 'emailjs-com'

function Contact() {

    function sendEmail(e) {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return <div className='contact'>
        <div className='my-3 contact-info text-center'>
            <p className='p-3'>Email: knight777@hotmail.ca</p>
            <p>Phone: (226) 962-4207</p>
        </div>
        <form onSubmit={sendEmail}>
            <div className="m-3">
                <label for="exampleFormControlInput1" className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="email@example.com" />
            </div>
            <div className="m-3">
                <label for="exampleFormControlTextarea1" className="form-label">Content</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    </div>
}

export default Contact;